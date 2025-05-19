
export async function fetchAll(entity) {
  console.log("Appel de fetchAll avec entity :", entity); // ← doit s'afficher !
  const res = await fetch(`http://localhost:3000/${entity}`);
  //alert(JSON.stringify(res))

  const result = await res.json();
  return result.data;
}

export async function fetchById(entity, id) {
  const res = await fetch(`http://localhost:3000/${entity}/${id}`);
  if (!res.ok) throw new Error(`Erreur pour ${entity} ${id}`);
  return await res.json();
}

export async function create(entity, data) {
  const res = await fetch(`http://localhost:3000/${entity}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
  // alert(JSON.stringify(res))
  if (!res.ok) throw new Error(`Erreur de création dans ${entity}`);
  const result = await res.json();
  //alert(JSON.stringify(result))
  
  return result.data;
}

export async function update(entity, id, data) {
  const res = await fetch(`http://localhost:3000/${entity}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Erreur de mise à jour de ${entity} ${id}`);
  const result = await res.json();
  
  return result.data;
}

export async function remove(entity, id) {
  const res = await fetch(`http://localhost:3000/${entity}/${id}`, {
    method: "DELETE",
  });
  // alert("remove: "+entity+" "+id+JSON.stringify(res))

  if (!res.ok) throw new Error(`Erreur de suppression de ${entity} ${id}`);
  // const result = await res.json();
  // alert("remove: "+JSON.stringify(result.data));
  // return result.data;
}
