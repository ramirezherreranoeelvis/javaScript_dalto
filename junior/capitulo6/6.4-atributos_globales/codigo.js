const titulo = document.querySelector('.titulo')
// contentEditable
titulo.setAttribute("contentEditable", "true")
// dir -> direccion l(left)t(to)r(right)
titulo.setAttribute("dir", "ltr")
// hidden o hace desaparecer sea ecualquier valor
titulo.setAttribute("hidden", "true")
titulo.removeAttribute("hidden")
// con cualquier numero funciona, pero si doy tab va al numero mayor o menor segun del deseado
titulo.setAttribute("tabindex", "0")
// la ayuda que aparecer al mantener el mause
titulo.setAttribute("title", "jajajajxd")