
// import { defineConfig } from 'slidev';
import { AccordionItem, AccordionTrigger, AccordionHeader, AccordionContent } from 'radix-vue';

export default defineConfig({
  vue: {
    setup() {
      // Register components globally
      app.component('Accordion', Accordion);
      app.component('AccordionItem', AccordionItem);
      app.component('AccordionTrigger', AccordionTrigger);
      app.component('AccordionHeader', AccordionHeader);
      app.component('AccordionContent', AccordionContent);
    },
  },
});

const hello = function () {
    console.log("My setup here.");
}

export default hello;
