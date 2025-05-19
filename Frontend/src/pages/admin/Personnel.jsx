import { useEffect, useState } from "react"
import SearchInput from "../../components/searchInput";
import DataTable from "../../components/dataTable";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import { X } from "lucide-react";
export default function Personnel() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [personToDelete, setPersonToDelete] = useState(null);


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
                    setIsModalOpen(true);
                  }}
              >
                Modifier
              </button>
              <button
                className="px-2 py-1 text-xs text-red-600 border border-red-500 rounded hover:bg-red-50"
                onClick={() => handleDelete(item)}
              >
                Supprimer
              </button>
            </div>
          ),
        },
      ];
     
      useEffect(()=>{
        const jsonData = [
            {
              personnelId: "p1",
              name: "Jean",
              lastName: "Dupont",
              email: "jean.dupont@example.com",
              role: "ADMIN",
              createdAt: "2024-11-10T09:20:30.000Z",
            },
            {
              personnelId: "p2",
              name: "Claire",
              lastName: "Moreau",
              email: "claire.moreau@example.com",
              role: "CUISINIER",
              createdAt: "2025-01-05T14:45:00.000Z",
            },
            {
              personnelId: "p3",
              name: "Lucas",
              lastName: "Bernard",
              email: "lucas.bernard@example.com",
              role: "SERVEUR",
              createdAt: "2025-02-18T08:00:00.000Z",
            }
          ];
        setData(jsonData)
      },[])

      useEffect(()=>{
        if(!searchTerm){
            setFilteredData(data)
        }else{
            const result = data.filter(user => {
                return (
                    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchTerm.toLowerCase())    
                )
            })
        setFilteredData(result);
        }
      },[searchTerm, data])

      const handleDelete = (personnel) => {
        setPersonToDelete(personnel);
        setIsDeleteOpen(true);
      };
      
      const confirmDelete = () => {
        setData((prev) =>
          prev.filter((p) => p.personnelId !== personToDelete.personnelId)
        );
        setIsDeleteOpen(false);
        setPersonToDelete(null);
      };
      
    return(
        <>
        <div className="w-full p-2 flex flex-col gap-3">
                <h1 className="text-2xl font-bold">Liste des personnels</h1>
                <div className="flex justify-between">
                    <div className="flex">
                        <SearchInput placeholder={"Recherche par nom ou email"} onChange={setSearchTerm}/>
                    </div>
                    <button className="bg-red-900 text-white px-4 rounded"
                     onClick={() => {
                        setEditData(null); // mode création
                        setIsModalOpen(true);
                      }}
                    >Créer un utilisateur</button>
                </div>
            <DataTable data={filteredData} columns={columns}/>
        </div>
        <PersonnelModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            initialData={editData}
            onSave={(newData) => {
                if (editData) {
                // modification
                setData((prev) =>
                    prev.map((item) =>
                    item.personnelId === newData.personnelId ? newData : item
                    )
                );
                } else {
                // création
                const newPersonnel = {
                    ...newData,
                    personnelId: `p${data.length + 1}`,
                    createdAt: new Date().toISOString(),
                };
                setData((prev) => [...prev, newPersonnel]);
                }
                setIsModalOpen(false);
            }}
        />
        <ConfirmDeleteModal
            isOpen={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={confirmDelete}
            message={`Voulez-vous vraiment supprimer ${personToDelete?.name} ${personToDelete?.lastName} ?`}
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
      role: "SERVEUR",
    });
  
    useEffect(() => {
      if (initialData) {
        setForm({
          personnelId: initialData.personnelId || "",
          name: initialData.name || "",
          lastName: initialData.lastName || "",
          email: initialData.email || "",
          role: initialData.role || "SERVEUR",
        });
      }
    }, [initialData]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = () => {
      onSave(form);
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-xl relative">
            <button
              onClick={onClose}
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
                  <option value="admin">Admin</option>
                  <option value="producteur">Producteur</option>
                  <option value="vendeur">Vendeur</option>
                </select>
              </div>
      
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  onClick={onClose} 
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