<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import './styles.css'
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
            The first filter applied is whether the sample is marked as proviral or not. If the sample is non-proviral, it is skipped entirely, and a message like <i>"sample X was skipped"</i> is logged. This check is based on MiCall's project code, which is expected contain <b>"NFL"</b> it it, such as <b>"NFLHIVDNA"</b>.
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
            If the sample has a remap value of 0 in the <b>cascade.csv</b> file, it means that the sample has no sequence data to work with, and the following error is logged: <i>"No contig/conseq constructed"</i>.
        </div>
      </AccordionContent>
    </AccordionItem>


    <AccordionItem class="AccordionItem" value='item-3' >
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>
            Consensus Percent Cutoff
          </span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
            If the <b>conseqs.csv</b> file contains a consensus that does not meet the <b>MAX</b> cutoff (i.e., it reports mixtures rather than the most common nucleotide at each position), the sequence is tagged with the error <i>"contig not MAX"</i> and skipped from further analysis.
        </div>
      </AccordionContent>
    </AccordionItem>


    <AccordionItem class="AccordionItem" value='item-4' >
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>
            V3 Sequence Check
          </span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
            If a sequence is from the <b>V3</b> loop region (which is not proviral), the sequence is tagged with the error <i>"is V3 sequence"</i> and skipped.
        </div>
      </AccordionContent>
    </AccordionItem>


    <AccordionItem class="AccordionItem" value='item-5' >
      <AccordionHeader class="AccordionHeader">
        <AccordionTrigger class="AccordionTrigger">
          <span>
            Low Internal Coverage
          </span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="AccordionContent">
        <div class="AccordionContentText">
            If there are gaps (marked by <b>X</b>'s) in the sequence with low internal read coverage, the sequence is tagged with the error <i>"low internal read coverage"</i> and skipped.
        </div>
      </AccordionContent>
    </AccordionItem>


  </AccordionRoot>
</template>
