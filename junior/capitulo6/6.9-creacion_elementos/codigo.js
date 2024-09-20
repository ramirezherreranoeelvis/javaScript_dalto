const contenedor = document.querySelector(".contenedor")
const item = document.createElement("LI")
const textoDelItem = document.createTextNode("Este es un item de la lista")
console.log(item)
item.appendChild(textoDelItem)
// lo que hace esto es como para guardar los elementos esto recien para agregar al cdocumnet
// esto para que no consuma tantos recursos ya que defrente con appendChild borra y agrega desde 0
// mas el fragmento no es nada html
const fragmento = document.createDocumentFragment();
fragmento.appendChild(item)
contenedor.appendChild(fragmento)
