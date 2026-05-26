---
layout: default
title: Sky Localization
nav_key: interests
permalink: /interests/sky-localization/
description: "Sky localization and follow-up for gravitational-wave sources by Alvin Ka Yue Li."
---

# Sky Localization

<p class="lead">I study how detector geometry and sensitivity shape gravitational-wave sky maps, with emphasis on electromagnetic follow-up and lensing-aware localization.</p>

<div class="research-summary">
  <div>
    <span class="summary-label">Main theme</span>
    <strong>LVK sky localization</strong>
  </div>
  <div>
    <span class="summary-label">Key result</span>
    <strong>KAGRA adds baselines and complementary antenna response</strong>
  </div>
  <div>
    <span class="summary-label">Use case</span>
    <strong>Multi-messenger astronomy and strong-lens follow-up</strong>
  </div>
</div>

The KAGRA sensitivity study in this directory quantifies the network effect directly. Using binary neutron star injections and a radiometric, coherence-based localization method, it tracks how the sky area changes as KAGRA's sensitivity is scaled from 1 to 250 Mpc. The key result is not a threshold but a continuous improvement: even at the current KAGRA scale of about 10 Mpc, the network gains measurable localization power from KAGRA's extra baseline and antenna pattern. As the sensitivity increases, timing precision and coherent reconstruction improve as well. In the HLV-detectable population, the fraction of events localized within 100 deg<sup>2</sup> rises from about 13% to about 23% at the current scale, and the median 90% credible area approaches the 100 deg<sup>2</sup> benchmark around 30 Mpc. At higher sensitivities, the network also detects more events, with the HLVK rate increasing by more than 30%.

## Why It Matters

Localization is the bottleneck between a trigger and a useful follow-up campaign. For strong-lensed systems, this matters twice: first when identifying the image, and again when trying to connect that image to a host galaxy or lens model. The same detector-geometry effects that improve ordinary binary-neutron-star localization set the floor for lensed-event follow-up, so I treat the two problems as part of the same observational chain.

## Representative Papers

<ul class="list-clean">
  <li><strong><a href="https://arxiv.org/abs/2604.13580">Investigating the effect of sensitivity of KAGRA on sky localization of gravitational-wave sources from compact binary coalescences</a></strong><br><span class="meta">Quantifies how KAGRA sensitivity and baselines improve localization for binary neutron star signals.</span></li>
  <li><strong><a href="{{ '/interests/targeted-lensing/' | relative_url }}">Strong-lensing localization study</a></strong><br><span class="meta">Shows how combining multiple lensed images reduces the sky area for follow-up.</span></li>
  <li><strong><a href="https://arxiv.org/abs/2308.04545">Low-latency gravitational wave alert products and their performance at the time of the fourth LIGO-Virgo-KAGRA observing run</a></strong><br><span class="meta">Shows why sky localization has to be available quickly to matter for follow-up.</span></li>
</ul>

<div class="split-feature">
  <div>
    <p>The KAGRA localization paper makes the network-side mechanism explicit. KAGRA adds a distinct antenna pattern and a new geometric baseline, so even a relatively weak detector can reduce timing degeneracies across the sky. That is why the fraction of well-localized events improves already at the current KAGRA sensitivity, not only after the detector becomes much more sensitive.</p>
    <p>The event-level sky maps show the same trend visually: ring-like posteriors become progressively more compact as KAGRA sensitivity increases. For strong-lensed follow-up, this is the difference between a theoretical candidate and an observing target.</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="4800">
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_antenna_pattern.png' | relative_url }}" alt="Antenna response patterns of the LVK detectors">
      <figcaption class="caption">Antenna response patterns of the LVK detectors, <a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_fraction_le_100_hlvk.png' | relative_url }}" alt="Fraction of events localized within 100 square degrees">
      <figcaption class="caption">Fraction of events localized within 100 deg<sup>2</sup>, <a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_median_area_hlvk.png' | relative_url }}" alt="Median 90 percent credible localization area versus KAGRA range">
      <figcaption class="caption">Median 90% credible area versus KAGRA range, <a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_skymap_1.png' | relative_url }}" alt="Event-level sky localization map with no KAGRA contribution">
      <figcaption class="caption">Event-level sky map without KAGRA contribution, <a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_skymap_7.png' | relative_url }}" alt="Event-level sky localization map at intermediate KAGRA sensitivity">
      <figcaption class="caption">Event-level sky map at intermediate KAGRA sensitivity, <a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_skymap_13.png' | relative_url }}" alt="Event-level sky localization map at high KAGRA sensitivity">
      <figcaption class="caption">Event-level sky map at high KAGRA sensitivity, <a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>.</figcaption>
    </figure>
  </div>
</div>

<p>For strongly lensed events, repeated images can improve localization because each image adds information about the same source. The practical result is a smaller sky region, better host-galaxy targeting, and a better chance of identifying the lensing structure. I treat that as part of the same follow-up problem rather than as a separate curiosity.</p>

## Related Work

<ul class="list-clean">
  <li><strong><a href="{{ '/research/' | relative_url }}">Research summary</a></strong><br><span class="meta">Broader technical context and publications.</span></li>
  <li><strong><a href="{{ '/interests/targeted-lensing/' | relative_url }}">Targeted lensing searches</a></strong><br><span class="meta">Repeated signals and subthreshold events.</span></li>
  <li><strong><a href="{{ '/interests/low-latency/' | relative_url }}">Low-latency detection</a></strong><br><span class="meta">Localization is most useful when it is available quickly.</span></li>
</ul>
