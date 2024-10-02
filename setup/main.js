
import { defineConfig } from 'vite'
import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionHeader, AccordionContent } from 'radix-vue';

const hello = function () {
    console.log("My setup here.");
}

export default defineConfig({
    // slidev: {
    //     vue: {
    //         setup() {
    //             // Register components globally
    //             app.component('AccordionRoot', AccordionRoot);
    //             app.component('AccordionItem', AccordionItem);
    //             app.component('AccordionTrigger', AccordionTrigger);
    //             app.component('AccordionHeader', AccordionHeader);
    //             app.component('AccordionContent', AccordionContent);
    //         },
    //     },
    // },
});
