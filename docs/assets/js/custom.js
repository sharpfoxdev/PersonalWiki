document.querySelectorAll('.not_found').forEach(div => {
    // Create a new <a> element
    let anchor = document.createElement('a');

    // Copy all attributes from the div to the <a> element
    Array.from(div.attributes).forEach(attr => {
        anchor.setAttribute(attr.name, attr.value);
    });

    // Copy the innerHTML from the div to the <a> element
    anchor.innerHTML = div.innerHTML;

    // Replace the div with the <a> element
    div.parentNode.replaceChild(anchor, div);
});
