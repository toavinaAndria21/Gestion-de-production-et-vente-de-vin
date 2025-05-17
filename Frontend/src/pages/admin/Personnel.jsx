import { useEffect, useState } from "react"
import SearchInput from "../../components/searchInput";
import DataTable from "../../components/DataTable";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import { X } from "lucide-react";
import { useToast } from "../../context/toastContext";
import { API_URL } from "../../config/api";
export default function Personnel() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [personToDelete, setPersonToDelete] = useState(null);
    const { showSucces, showError, showAlert } = useToast();
    const [selectedPersonnel, setSelectedPersonnel] = useState(null);
    const [filterStatus, setFilterStatus] = useState('Actif');


    const columns = [
        {
          key: "personnelId",
          label: "ID",
          width: "w-32",
        },
        {
          key: "name",
          label: "Nom",
        },
        {
          key: "lastName",
          label: "Prénom",
        },
        {
          key: "email",
          label: "Email",
        },
        {
          key: "role",
          label: "Rôle",
        },
        {
          key: "createdAt",
          label: "Créé le",
          render: (item) =>
            new Date(item.createdAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
        },
        {
          key: "actions",
          label: "Actions",
          render: (item) => (
            <div className="flex justify-center gap-2">
              <button
                className="px-2 py-1 text-xs text-blue-600 border border-blue-500 rounded hover:bg-blue-50"
                onClick={() => {
                    setEditData(item); // mode modification
                    setSelectedPersonnel(item.personnelId)
                    setIsModalOpen(true);
                  }}
              >
                Modifier
              </button>
              <button
                className="px-2 py-1 text-xs text-red-600 border border-red-500 rounded hover:bg-red-50"
                onClick={() => handleDelete(item)}
              >
                Désactiver
              </button>
            </div>
          ),
        },
      ];
     
      const getUsersList = async () => {
        const response = await fetch(`${API_URL}/personnel`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setData(data);
        setFilteredData(data);
      };

      useEffect(()=>{
        
        getUsersList();
        
      },[])

      useEffect(() => {
        const result = data.filter((user) => {
          const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
      
          const matchesStatus = user.status === filterStatus;
      
          return matchesSearch && matchesStatus;
        });
      
        setFilteredData(result);
      }, [searchTerm, data, filterStatus]);
      

      const handleDelete = (personnel) => {
        setPersonToDelete(personnel);
        setIsDeleteOpen(true);
      };
      
      const confirmDelete = async () => {
        try {
          const res = await fetch(`${API_URL}/personnel/disable/${personToDelete.personnelId}`, {
            method: "PUT",
          });
      
          const result = await res.json();
      
          if (res.status === 200) {
            showSucces("Utilisateur désactivé avec succès");
            setData((prev) =>
              prev.filter((p) => p.personnelId !== personToDelete.personnelId)
            );
            setIsDeleteOpen(false);
            setPersonToDelete(null);
            return;
          }
      
          if (res.status === 404) {
            showAlert("Utilisateur introuvable");
            return;
          }
      
          if (res.status === 500) {
            showError("Échec de la désactivation");
            return;
          }
      
          showError("Une erreur inconnue est survenue");
        } catch (error) {
          console.error("Erreur lors de la désactivation :", error);
          showError("Erreur lors de la désactivation");
        }
      };
      
      
      
      const handleCreatePersonnel = async (newData) => {
        if(!newData.personnelId || !newData.name || !newData.lastName || !newData.email || !newData.role) {
          showError("Veuillez remplir tous les champs.");
          return;
        }
        try {
          const res = await fetch(`${API_URL}/personnel`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          });
      
          const result = await res.json();
      
          if (res.status === 201) {
            setData((prev) => [...prev, result]); 
            showSucces(result.message || "Utilisateur créé avec succès");
            setIsModalOpen(false);
            return;
          }
      
          if (res.status === 400) {
            showError(result.message || "Données invalides");
            return;
          }
      
          if (res.status === 409) {
            showAlert(result.message || "Conflit : utilisateur déjà existant");
            return;
          }
      
          if (res.status === 500) {
            showError(result.message || "Erreur interne du serveur");
            return;
          }
      
          // Pour tout autre cas inattendu
          showError("Une erreur inattendue est survenue.");
        } catch (error) {
          console.error("Erreur lors de la création :", error);
          showError("Une erreur est survenue lors de la création.");
        }
      };
      
      
      const handleUpdatePersonnel = async (newData) => {
        try {
          const res = await fetch(`${API_URL}/personnel/update/${selectedPersonnel}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          });
      
          if (res.status === 500) {
            showError("Échec de la mise à jour");
            return;
          }
          
          if (res.status === 404) {
            showAlert("Utilisateur introuvable");
            return;
          }
      
          const { data: updated } = await res.json();
          setData((prev) =>
            prev.map((item) =>
              item.personnelId === updated.personnelId ? updated : item
            )
          );
          showSucces("Utilisateur modifié avec succès");
          setIsModalOpen(false);

        } catch (error) {
          console.error("Erreur lors de la mise à jour :", error);
          showError("Une erreur est survenue lors de la modification.");
        }
      };
      

    return(
        <>
        <div className="w-full p-2 flex flex-col gap-3">
                <h1 className="text-2xl font-bold">Liste des personnels</h1>
                <div className="flex justify-between">
                    <div className="flex">
                        <SearchInput placeholder={"Recherche par nom ou email"} onChange={setSearchTerm}/>
                    </div>
                    <div className="flex gap-6">
                    <button
                      className="bg-gray-200 font-medium px-4 rounded text-gray-700"
                      onClick={() => {
                        setFilterStatus((prev) => (prev === 'Actif' ? 'Inactif' : 'Actif'));
                      }}
                    >
                      Filtre : {filterStatus}
                    </button>

                    <button className="bg-red-900 text-white px-4 rounded"
                     onClick={() => {
                        setEditData(null); // mode création
                        setIsModalOpen(true);
                      }}
                    >Créer un utilisateur
                    </button>
                    </div>
                </div>
            <DataTable data={filteredData} columns={columns}/>
        </div>
        <PersonnelModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialData={editData}
            onSave={async (newData) => {
              if (editData) {
                await handleUpdatePersonnel(newData);
              } else {
                await handleCreatePersonnel(newData);
              }
            }}
        />
        <ConfirmDeleteModal
            isOpen={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={confirmDelete}
            message={`Voulez-vous vraiment désactiver ${personToDelete?.name} ${personToDelete?.lastName} ?`}
            />
        </>
    )
}

function PersonnelModal({ isOpen, onClose, onSave, initialData = {} }) {

    const [form, setForm] = useState({
      personnelId: "",
      name: "",
      lastName: "",
      email: "",
      role: "",
    });

    const resetForm = () => {
      setForm({
        personnelId: "",
        name: "",
        lastName: "",
        email: "",
        role: "",
      });
    };
    
    useEffect(() => {
      if (initialData && Object.keys(initialData).length > 0) {
        // mode modification
        setForm({
          personnelId: initialData.personnelId || "",
          name: initialData.name || "",
          lastName: initialData.lastName || "",
          email: initialData.email || "",
          role: initialData.role || "",
        });
      } else {
        // mode création : on réinitialise le formulaire
        setForm({
          personnelId: "",
          name: "",
          lastName: "",
          email: "",
          role: "",
        });
      }
    }, [initialData]);
    
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = () => {
      onSave(form);
      resetForm();
      onClose();
    };
  
    if (!isOpen) return null;
   
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-xl relative">
            <button
              onClick={()=>{
                onClose();
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {initialData?.personnelId ? "Modifier un utilisateur" : "Créer un utilisateur"}
            </h2>
      
            <div className="space-y-5">
            <div>
                <label 
                  htmlFor="personnelId" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  CIN
                </label>
                <input
                  id="personnelId"
                  type="text"
                  minLength={12}
                  maxLength={12}
                  pattern="\d*"
                  name="personnelId"
                  placeholder="Entrez le CIN"
                  value={form.personnelId}
                  onChange={(e) => {
                    const value = e.target.value;
                    // N'accepter que les chiffres
                    if (/^\d*$/.test(value)) {
                      setForm((prev) => ({ ...prev, personnelId: value }));
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800/30 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Entrez le nom"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800/30 focus:outline-none transition-all"
                />
              </div>
    
              <div>
                <label 
                  htmlFor="lastName" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Prénom
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Entrez le prénom"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800/30 focus:outline-none transition-all"
                />
              </div>
    
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Entrez l'adresse email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800/30 focus:outline-none transition-all"
                />
              </div>
    
              <div>
                <label 
                  htmlFor="role" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Rôle
                </label>
                <select
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-800/30 focus:outline-none transition-all"
                >
                  <option value="">Sélectionnez un rôle</option>
                  <option value="Administrateur">Admin</option>
                  <option value="Producteur">Producteur</option>
                  <option value="Vendeur">Vendeur</option>
                </select>
              </div>
      
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  onClick={() => {
                    onClose();
                  }} 
                  className="px-4 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }