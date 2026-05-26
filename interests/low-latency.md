---
layout: default
title: Low-Latency Detection
nav_key: interests
permalink: /interests/low-latency/
description: "Low-latency gravitational-wave detection and alerts by Alvin Ka Yue Li."
---

# Low-Latency Detection

<p class="lead">I work on real-time gravitational-wave detection, alert generation, and follow-up readiness, with an emphasis on operational reliability inside the LVK collaboration.</p>

<div class="research-summary">
  <div>
    <span class="summary-label">Role</span>
    <strong>Co-chair, KAGRA Low-Latency Group</strong>
  </div>
  <div>
    <span class="summary-label">Scope</span>
    <strong>Detection pipelines, validation, and alert workflows</strong>
  </div>
  <div>
    <span class="summary-label">Use case</span>
    <strong>Rapid electromagnetic follow-up and multi-messenger astronomy</strong>
  </div>
</div>

I focus on the parts of the pipeline that have to work under time pressure: trigger reliability, handoff between analysis stages, and the coordination needed to make alerts useful to observers. This is the operational side of gravitational-wave astronomy, and it is what makes sky localization and follow-up scientifically actionable.

The broader low-latency problem is not only speed. Alerts have to be reliable enough to trust, informative enough to use, and reproducible enough to interpret later. In practice that means end-to-end testing, validation against injections or replayed data, and careful accounting of what information is available at each stage of the pipeline.

## What I Focus On

<div class="research-list">
  <section class="research-item">
    <span class="research-number">01</span>
    <div>
      <h3>End-to-end alert products</h3>
      <p>Low-latency analysis is only useful if the end product can guide follow-up. I care about the chain from data ingestion to triggers, annotations, localization products, and public alerts.</p>
    </div>
  </section>

  <section class="research-item">
    <span class="research-number">02</span>
    <div>
      <h3>Operational validation</h3>
      <p>Performance studies need realistic replays and injections. The relevant question is how the system behaves in observing-run conditions, not just whether a pipeline works on paper.</p>
    </div>
  </section>

  <section class="research-item">
    <span class="research-number">03</span>
    <div>
      <h3>Follow-up readiness</h3>
      <p>Alerts matter because they support electromagnetic and neutrino follow-up. That means the localization and source-summary products have to be available quickly and in a form that other observers can use.</p>
    </div>
  </section>
</div>

## Representative Papers

<ul class="list-clean">
  <li><strong><a href="https://arxiv.org/abs/2308.04545">Low-latency gravitational wave alert products and their performance at the time of the fourth LIGO-Virgo-KAGRA observing run</a></strong><br><span class="meta">Overview of alert products, end-to-end performance, and early-warning capability in O4.</span></li>
  <li><strong><a href="https://arxiv.org/abs/1901.03310">Low-Latency Gravitational Wave Alerts for Multi-Messenger Astronomy During the Second Advanced LIGO and Virgo Observing Run</a></strong><br><span class="meta">Describes the original low-latency alert framework for multi-messenger astronomy.</span></li>
  <li><strong><a href="https://arxiv.org/abs/2604.13580">Investigating the effect of sensitivity of KAGRA on sky localization of gravitational-wave sources from compact binary coalescences</a></strong><br><span class="meta">Shows how detector sensitivity and baselines affect alert usefulness through localization quality.</span></li>
</ul>

<div class="split-feature">
  <div>
    <p>Low-latency work is not just about making a pipeline fast. The alert has to be trustworthy, the latency has to be measured honestly, and the output has to be useful to observers who are making decisions in real time. That means paying attention to ingestion, candidate generation, annotations, and public alert products.</p>
    <p>The relevant question is whether the pipeline behaves well in observing-run conditions. Replayed data and injection campaigns matter because they expose the failure modes that only show up under operational load.</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="4800">
    <figure class="slideshow-slide">
      <img src="https://emfollow.docs.ligo.org/em-properties/em-bright/_images/hasNS.png" alt="ROC curve for HasNS">
      <figcaption class="caption">ROC curve for HasNS from the EM-Bright performance study tied to <a href="https://arxiv.org/abs/2308.04545">arXiv:2308.04545</a>.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="https://emfollow.docs.ligo.org/em-properties/em-bright/_images/hasRemnant.png" alt="ROC curve for HasRemnant">
      <figcaption class="caption">ROC curve for HasRemnant from the same performance study.</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="https://emfollow.docs.ligo.org/em-properties/em-bright/_images/hasMassGap.png" alt="ROC curve for HasMassGap">
      <figcaption class="caption">ROC curve for HasMassGap from the same performance study.</figcaption>
    </figure>
  </div>
</div>

<p>These plots are the right kind of figure for this topic: they show how well the alert products discriminate relevant source classes, which is exactly what matters when an observing team is deciding whether and how to follow up a trigger.</p>

## Related Work

<ul class="list-clean">
  <li><strong><a href="{{ '/research/' | relative_url }}">Research summary</a></strong><br><span class="meta">Technical context and selected publications.</span></li>
  <li><strong><a href="{{ '/interests/sky-localization/' | relative_url }}">Sky localization</a></strong><br><span class="meta">Directly linked to alert quality and follow-up.</span></li>
  <li><strong><a href="{{ '/contact/' | relative_url }}">Contact</a></strong><br><span class="meta">Research map and profile links.</span></li>
</ul>
