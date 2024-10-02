<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import './styles.css'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Proviral Check',
    content: 'The first filter applied is whether the sample is marked as proviral or not. If the sample is non-proviral, it is skipped entirely, and a message like "sample X was skipped" is logged. This check is based on MiCall\'s project code, which is expected contain "NFL" it it, such as "NFLHIVDNA".',
  },
  {
    value: 'item-2',
    title: 'Remap Check',
    content: 'If the sample has a remap value of 0 in the cascade.csv file, it means that the sample has no sequence data to work with, and the following error is logged: "No contig/conseq constructed".',
  },
  {
    value: 'item-3',
    title: 'Consensus Percent Cutoff',
    content: 'If the conseqs.csv file contains a consensus that does not meet the MAX cutoff (i.e., it reports mixtures rather than the most common nucleotide at each position), the sequence is tagged with the error "contig not MAX" and skipped from further analysis.',
  },
  {
    value: 'item-4',
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


    <AccordionItem class="AccordionItem" value='item-1' >
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>
            Proviral Check
          </span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
            The first filter applied is whether the sample is marked as proviral or not. If the sample is non-proviral, it is skipped entirely, and a message like "sample X was skipped" is logged. This check is based on MiCall's project code, which is expected contain "NFL" it it, such as "NFLHIVDNA".
        </div>
      </AccordionContent>
    </AccordionItem>


    <AccordionItem class="AccordionItem" value='item-2' >
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>
            Remap Check
          </span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
            The first filter applied is whether the sample is marked as proviral or not. If the sample is non-proviral, it is skipped entirely, and a message like "sample X was skipped" is logged. This check is based on MiCall's project code, which is expected contain "NFL" it it, such as "NFLHIVDNA".
        </div>
      </AccordionContent>
    </AccordionItem>


  </AccordionRoot>
</template>
