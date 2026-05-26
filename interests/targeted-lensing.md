---
layout: default
title: Gravitational-Wave Lensing
nav_key: interests
permalink: /interests/targeted-lensing/
description: "Gravitational-wave lensing research by Alvin Ka Yue Li."
---

# Gravitational-Wave Lensing

<p class="lead">My lensing work connects targeted searches for subthreshold counterparts with repeated-signal localization for multimessenger follow-up.</p>

<div class="research-summary">
  <div>
    <span class="summary-label">Core methods</span>
    <strong>TESLA, TESLA-X, repeated-signal localization</strong>
  </div>
  <div>
    <span class="summary-label">Focus</span>
    <strong>Subthreshold lensed signals and lensing-aware sky localization</strong>
  </div>
  <div>
    <span class="summary-label">Output</span>
    <strong>Search frameworks, localization studies, and observing-run analyses</strong>
  </div>
</div>

Strong lensing can split one source into multiple gravitational-wave images that arrive at different times and with different amplitudes. The brighter image is usually the one that first triggers a search, but the later images can sit below threshold. My work asks how to recover those weaker counterparts without turning the search into an all-sky brute-force scan.

The story starts with TESLA. The method uses a known event to narrow the parameter space for a later lensed image, so the search is focused on the most plausible region rather than the full bank. That makes the method practical enough to use inside a collaboration pipeline.

TESLA-X extends the idea. Instead of only reducing the bank around the first event, it builds a targeted population model from lensed injections and uses that model to define a bank that is better matched to the subthreshold problem. The gain is not generic discovery power. It is a better chance of recovering the sort of faint, physically consistent image that a standard broad search would miss.

## TESLA

<p>TESLA uses a reduced bank centered on the target event, then ranks candidate subthreshold images against the background. The point is to preserve sensitivity to the right part of parameter space while keeping the search manageable for LVK analysis workflows.</p>

<div class="split-feature">
  <div>
    <p>The first TESLA figure lays out the workflow: start from a target event, generate simulated injections around it, run the search, and keep only templates that can recover the injections. The reduced bank is the key step because it turns an otherwise broad search into a targeted one.</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="4800">
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/tesla_workflow_2021.png' | relative_url }}" alt="TESLA targeted subthreshold lensing search workflow">
      <figcaption class="caption">TESLA targeted subthreshold search workflow from <a href="https://arxiv.org/abs/1904.06020">arXiv:1904.06020</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/tesla_targeted_bank_2021.png' | relative_url }}" alt="TESLA targeted bank comparison">
      <figcaption class="caption">TESLA targeted bank compared with the original O3 bank from <a href="https://arxiv.org/abs/1904.06020">arXiv:1904.06020</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/tesla_pe_bank_2021.png' | relative_url }}" alt="TESLA PE bank comparison">
      <figcaption class="caption">TESLA parameter-estimation bank compared with the original O3 bank from <a href="https://arxiv.org/abs/1904.06020">arXiv:1904.06020</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/tesla_performance_targeted_2021.png' | relative_url }}" alt="TESLA targeted bank performance plot">
      <figcaption class="caption">TESLA targeted-bank performance against combined FAR from <a href="https://arxiv.org/abs/1904.06020">arXiv:1904.06020</a>.</figcaption>
    </figure>
  </div>
</div>

## TESLA-X

<p>TESLA-X uses the same basic logic, but it goes one step further by turning the lensed injections into a source-population model. That gives the reduced bank a better physical shape and makes it more representative of the weak-image problem we actually care about.</p>

<div class="split-feature reverse">
  <div>
    <p>The TESLA-X slides show the progression from cartoon to implementation: a reduced bank, the workflow, the template-bank comparison, and the sensitivity plots. Together they show why the method is better matched to subthreshold lensed signals than a generic template bank.</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="5200">
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_reduced_bank_2023.png' | relative_url }}" alt="TESLA-X reduced bank cartoon">
      <figcaption class="caption">TESLA-X reduced-bank cartoon from <a href="https://arxiv.org/abs/2311.06416">arXiv:2311.06416</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_workflow_2311_06416.png' | relative_url }}" alt="TESLA-X workflow for targeted lensing searches">
      <figcaption class="caption">TESLA-X workflow from <a href="https://arxiv.org/abs/2311.06416">arXiv:2311.06416</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_template_bank_2023.png' | relative_url }}" alt="TESLA-X targeted template bank comparison">
      <figcaption class="caption">TESLA-X template-bank comparison from <a href="https://arxiv.org/abs/2311.06416">arXiv:2311.06416</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_sensitivity_m1m2_2023.png' | relative_url }}" alt="TESLA-X sensitivity plot">
      <figcaption class="caption">TESLA-X sensitivity plot in mass-ratio space from the 2023 paper.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_sensitivity_ae_2023.png' | relative_url }}" alt="TESLA-X sensitivity plot in SNR space">
      <figcaption class="caption">TESLA-X sensitivity plot in effective spin space from the 2023 paper.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_kde_mass_model_2023.png' | relative_url }}" alt="TESLA-X KDE to source-population model">
      <figcaption class="caption">TESLA-X source-population KDE used to build the targeted mass model.</figcaption>
    </figure>
  </div>
</div>

## Localization for Lensed Follow-up

<p>The other half of the lensing problem is localization. Once a weak lensed image is recovered, the event is only useful if the sky region is small enough for host-galaxy searches, lens-structure studies, and multi-messenger follow-up.</p>

<div class="split-feature">
  <div>
    <p>The lensing-localization paper in this directory studies exactly that problem. Using simulated strongly lensed compact binary coalescences and Bayestar sky maps, it finds that combining multiple lensed images improves localization monotonically. The largest gain comes from the second image: two-image systems typically improve by about an order of magnitude relative to the best single image, and subthreshold images can be included without degrading performance.</p>
    <p>By four images, the typical localization area reaches the 10 to 100 deg<sup>2</sup> range, which is the regime where host-galaxy association and targeted follow-up become realistic rather than aspirational. That is the relevant threshold for lensing work, not just an abstract improvement in sky map quality.</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="5000">
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_cdf_2img_including_sub.png' | relative_url }}" alt="CDF of 90 percent credible region area for two-image systems">
      <figcaption class="caption">Two-image systems with subthreshold images included.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_cdf_4img_including_sub.png' | relative_url }}" alt="CDF of 90 percent credible region area for four-image systems">
      <figcaption class="caption">Four-image systems with subthreshold images included.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_median_vs_n_split.png' | relative_url }}" alt="Median localization area as a function of the number of images">
      <figcaption class="caption">Median 90% credible area versus image multiplicity.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_hist_2img_combined.png' | relative_url }}" alt="Distribution of localization area for two-image systems">
      <figcaption class="caption">Distribution of localization area for two-image systems.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_hist_4img_inclusive.png' | relative_url }}" alt="Distribution of localization area for four-image systems">
      <figcaption class="caption">Distribution of localization area for four-image systems.</figcaption>
    </figure>
  </div>
</div>

## LVK Observing-Run Papers

<p>My method development feeds into the LVK observing-run lensing papers that track the search from O3 to O4. The work moves from targeted subthreshold searches to collaboration-wide analysis and editorial responsibility.</p>

<div class="research-list">
  <section class="research-item">
    <span class="research-number">01</span>
    <div>
      <h3>O3a lensing paper</h3>
      <p>The <strong>O3a analysis</strong> established the collaboration-level search for gravitational-lensing signatures in the full third observing run. My <strong>targeted-search development</strong> work provided the methodological base for this line of analysis.</p>
    </div>
  </section>

  <section class="research-item">
    <span class="research-number">02</span>
    <div>
      <h3>O3b and O4a lensing papers</h3>
      <p>I served as an <strong>analyst</strong> and <strong>editorial team member</strong> on the O3b and O4a lensing papers, contributing to the analysis workflow, validation, and paper preparation for the observing-run series.</p>
    </div>
  </section>

  <section class="research-item">
    <span class="research-number">03</span>
    <div>
      <h3>O4b lensing paper</h3>
      <p>I am the <strong>editorial team chair</strong> for the O4b lensing paper, coordinating the writing process and helping steer the collaboration toward a consistent final analysis narrative.</p>
    </div>
  </section>
</div>

## Related Papers

<ul class="list-clean">
  <li><strong><a href="https://arxiv.org/abs/1901.02674">Search for gravitational lensing signatures in LIGO-Virgo binary black hole events</a></strong><br><span class="meta">Early LVK lensing search that set the context for later targeted and collaboration-wide analyses.</span></li>
  <li><strong><a href="https://arxiv.org/abs/1904.06020">Targeted Sub-threshold Search for Strongly-lensed Gravitational-wave Events</a></strong><br><span class="meta">Introduced the TESLA framework for recovering weaker lensed counterparts using a reduced template bank.</span></li>
  <li><strong><a href="https://arxiv.org/abs/2105.06384">Search for lensing signatures in the gravitational-wave observations from the first half of LIGO-Virgo's third observing run</a></strong><br><span class="meta"><strong>O3a collaboration lensing search</strong>.</span></li>
  <li><strong><a href="https://arxiv.org/abs/2304.08393">Search for gravitational-lensing signatures in the full third observing run of the LIGO-Virgo network</a></strong><br><span class="meta"><strong>O3 full-run collaboration lensing paper</strong>; I contributed through the targeted-search work that underpinned this analysis series.</span></li>
  <li><strong><a href="https://arxiv.org/abs/2306.03827">Follow-up Analyses to the O3 LIGO-Virgo-KAGRA Lensing Searches</a></strong><br><span class="meta">Follow-up analyses for O3 lensing candidates, including assessment of significance and additional searches.</span></li>
  <li><strong><a href="https://arxiv.org/abs/2311.06416">TESLA-X: An effective method to search for sub-threshold lensed gravitational waves with a targeted population model</a></strong><br><span class="meta">Extended TESLA with a lensed-injection-driven population model and targeted template bank.</span></li>
  <li><strong><a href="https://arxiv.org/abs/2604.16561">A First Investigation of Repeated-Signal Localization of Strongly Lensed Gravitational Waves for Multimessenger Astronomy</a></strong><br><span class="meta">Shows how combining multiple lensed images improves sky localization and supports host-galaxy follow-up.</span></li>
  <li><strong><a href="https://arxiv.org/abs/2512.16347">GWTC-4.0: Searches for Gravitational-Wave Lensing Signatures</a></strong><br><span class="meta"><strong>GWTC-4 lensing-signature search</strong>.</span></li>
</ul>

## Related Work

<ul class="list-clean">
  <li><strong><a href="{{ '/research/' | relative_url }}">Research summary</a></strong><br><span class="meta">Broader technical overview and publication list.</span></li>
  <li><strong><a href="{{ '/interests/sky-localization/' | relative_url }}">Sky localization</a></strong><br><span class="meta">Repeated images and host-galaxy targeting.</span></li>
</ul>
