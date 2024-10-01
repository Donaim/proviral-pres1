<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import './styles.css'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
]

function disableKeyboardEvents(event) {
  if (["keydown"].includes(event)) {
      event.preventDefault();
      return;
  }
  console.log({event});
}

</script>

<template>
  <div @keydown="disableKeyboardEvents">
  <AccordionRoot
    class="AccordionRoot"
    default-value="'item-1'"
    type="single"
    :collapsible="true"
  >
    <template
      v-for="item in accordionItems"
      :key="item.value"
    >
      <AccordionItem
        class="AccordionItem"
        :value="item.value"
      >
        <AccordionHeader class="AccordionHeader">
          <AccordionTrigger class="AccordionTrigger">
            <span>{{ item.title }}</span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="AccordionContent">
          <div class="AccordionContentText">
            {{ item.content }}
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
  </div>
</template>
