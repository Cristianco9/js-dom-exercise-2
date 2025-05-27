# IENSCH
---
# Desarrollo web - Manipulación del DOM

Este proyecto es un **ejercicio educativo interactivo** diseñado para enseñar los 
fundamentos de la **manipulación del DOM con JavaScript**. Forma parte del curso 
de **Desarrollo Web** y está orientado a estudiantes que están aprendiendo a usar 
`addEventListener`, eventos como `click`, y funciones dinámicas que afectan la 
interfaz de usuario.

---

## 📌 Tecnologías utilizadas

- **HTML5**
- **CSS3** (con `rem` y `font-size: 62.5%` para facilitar escalabilidad)
- **JavaScript (ES6+)**

---

## 🎯 Características principales

- 📝 **Creación dinámica** de tareas escritas por el usuario.
- ➕ **Botón interactivo** para agregar tareas con validación básica.
- ✅ **Marcar tareas como completadas** haciendo clic sobre ellas.
- 🗑️ **Botón para eliminar tareas** individualmente.
- 🔢 **Contador automático** de tareas totales y completadas.
- 🎨 **Estilo visual moderno** con colores suaves, sombras y diseño responsivo.

---

## 🧪 ¿Qué aprenderán los estudiantes?

- Cómo usar `document.createElement`, `appendChild` y `innerHTML`.
- Cómo manejar eventos DOM como `click` y `keydown` con `addEventListener`.
- Cómo agregar clases dinámicamente (`classList.add`, `classList.toggle`).
- Cómo eliminar elementos del DOM con `.remove()`.
- Cómo usar condicionales y validaciones (`trim()`).
- Cómo actualizar contenido en tiempo real con `textContent`.

---

## ⚙️ Estructura del proyecto

- `index.html`: Contiene la estructura principal de la app con los elementos HTML necesarios.
- `styles.css`: Hoja de estilos en `rem` que define el diseño visual moderno y responsivo.
- `script.js`: Lógica JS para agregar, marcar y eliminar tareas usando eventos DOM.
- `#taskInput`: Campo de entrada para nuevas tareas.
- `#addTaskBtn`: Botón que ejecuta la función `addTask()`.
- `#taskList`: Contenedor dinámico de la lista de tareas.
- `#counter`: Muestra en tiempo real el total de tareas y las completadas.

---

## 🚀 ¿Cómo probar el proyecto?

1. Clona este repositorio:
```bash
      git clone https://github.com/iensc-software-sena/js-dom-exercise-2.git
```

2. Accede al directorio:

```bash
    cd js-dom-exercise-2
```

3. Abre el proyecto en Visual Studio Code:
```bash
    code .
```

4. Ejecuta `index.html` en tu navegador favorito.

---

## Ideas para extender el ejercicio

- 💾 Guardar las tareas en `localStorage` para mantenerlas al recargar.
- 🔄 Permitir editar tareas con doble clic.
- 🎨 Agregar animaciones al crear o eliminar tareas.
- 🔍 Filtro de búsqueda para encontrar tareas específicas.
- 🕒 Agregar fecha de creación o vencimiento a cada tarea.
- ♻️ Botón para borrar todas las tareas completadas.

---

## License
Distribuido bajo la licencia MIT. Consulte la sección «LICENCIA» para más información.
