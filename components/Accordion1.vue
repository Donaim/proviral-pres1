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
    content: 'Yes! You can <b>use</b> the transition prop to configure the animation.',
  },
]

</script>

<template>
  <AccordionRoot

    class="AccordionRoot"
    default-value="'item-1'"
    type="single"
    :collapsible="true"

    @keydown.stop.prevent
    @keypress.stop.prevent
    @keyup.stop.prevent

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
             <slot name="slot1"/>
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>
