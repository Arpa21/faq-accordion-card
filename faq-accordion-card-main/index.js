const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const activeAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    //check if such an element exists and if it's same as the clicked element
    if (
      activeAccordionItemHeader &&
      activeAccordionItemHeader !== accordionItemHeader
    ) {
      //remove that active class
      activeAccordionItemHeader.classList.toggle("active");
      activeAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
