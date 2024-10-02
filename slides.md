---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Proviral pipeline

A gentle introduction
<!-- TODO: improve the subtitle -->

---
transition: fade-out
---

# About me

<!-- TODO: better presentation form. More detail. -->

- Programmer
  - MiCall/Proviral pipeline
  - I have a blog at https://vau.place
- Ukrainian
  - Thank you Canada for support
<!-- - TODO: more points -->

---

# Presentation plan

<Toc />

---

# About Proviral Pipeline

<!-- TODO: better presentation form. More detail. -->

- Collection of programs that output images and CSV files.
- Is a pipeline.
- Created by Don, Charlotte, and me

---

# Structure of Proviral Pipeline

<!-- TODO: better presentation form. More detail. -->

- Sample collection & MiCall processing
- Proviral pipeline startup
- CFEIntact processing
- Proviral pipeline outputs
   (such as regions clipping and landscapes)
- BBLabTools processing

<!-- TODO: insert a drawing of a factory. -->

---
setup: |
  import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue';
---

# Initiation

<!-- TODO: better presentation form. More detail. -->

First, the samples are collected.

<!-- <Accordion1 /> -->

  <AccordionRoot>
      <AccordionItem>
        <AccordionHeader class="AccordionHeader">
          <AccordionTrigger class="AccordionTrigger">
            <span>{{ item.title }}</span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="AccordionContent">
          <div class="AccordionContentText">
              hello
          </div>
        </AccordionContent>
      </AccordionItem>
  </AccordionRoot>

Then they are loaded into MiCall.

MiCall processes the samples and starts Proviral pipeline via Kive.

---

# Proviral startup

<!-- TODO: better presentation form. More detail. -->

- Proviral pipeline runs QC checks on every sequence.
- This includes....

- It uses blast, mafft, and mappy for alignment purposes.

- Samples that passed QC proceed to CFEIntact analysis.

---

# HIVIntact

<!-- TODO: better presentation form. More detail. -->

Now called CFEIntact.

---

# Back to Proviral Pipeline

<!-- TODO: better presentation form. More detail. -->

- Decides what single error to report (TODO: the decision tree)
- Slices the input sequence into its parts, specifically `x1,psi_sl1,psi_sl2,psi_sl3,psi_sl4,gag,pol,protease,rt,integrase,vif,vpr,tat_exon1,rev_exon1,d4,x2,vpu,env,gp120,gp41,tat_exon2,rev_exon2,x3,nef,ltr3`
- Generates `landscapes.csv`


---
dragPos:
  bblabs: 44,134,681,403
  landscapes: 375,-786,231,2251
---

# BBLabTools

<!-- TODO: better presentation form. More detail. -->

- Useful tools for HIV research from the Brockman and Brumme Lab at SFU.
- Paints landscape plots (at some point).

<img v-drag="'landscapes'" src="./assets/landscapes1.svg">

<img v-drag="'bblabs'" src="./assets/bblabs1.png">

---

# Summary of output files

<!-- TODO: better presentation form. More detail. -->

- `defects.csv`
- `landscapes.svg` (on-demand)
- `landscapes.csv`
- `regions.csv`
- `outcome_summary.csv`
- `table_precursor.csv`

<!-- In the order of importance: -->

---

# Where to find the files

<!-- TODO: better presentation form. More detail. -->

- `defects.csv`
- `landscapes.svg` (on-demand)
- `landscapes.csv`
- `regions.csv`
- `outcome_summary.csv`
- `table_precursor.csv`


