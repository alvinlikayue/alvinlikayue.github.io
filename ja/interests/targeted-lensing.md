---
layout: default
title: 重力波レンズ効果
nav_key: interests
permalink: /ja/interests/targeted-lensing/
lang: ja
alternate_url: /interests/targeted-lensing/
description: "Alvin Ka Yue Li による重力波レンズ効果研究。"
---

# 重力波レンズ効果

<p class="lead">私のレンズ研究は、しきい値下の対応信号を探すターゲット探索と、マルチメッセンジャー追観測のための反復信号の天空位置推定をつなぐものです。</p>

<div class="research-summary">
  <div>
    <span class="summary-label">主要手法</span>
    <strong>TESLA、TESLA-X、反復信号の天空位置推定</strong>
  </div>
  <div>
    <span class="summary-label">焦点</span>
    <strong>しきい値下のレンズ信号とレンズ効果を考慮した天空位置推定</strong>
  </div>
  <div>
    <span class="summary-label">成果</span>
    <strong>探索フレームワーク、位置推定研究、観測ラン解析</strong>
  </div>
</div>

強い重力レンズ効果は、1つの重力波源を複数の像に分け、それぞれが異なる時刻と振幅で到着する可能性があります。通常、明るい像が最初に探索をトリガーしますが、後続の像はしきい値下に埋もれることがあります。私の研究は、探索を全空間の総当たりに戻すことなく、そのような弱い対応信号をどう回収するかを問うものです。

TESLA は、既知イベントを使って後続のレンズ像のパラメータ空間を狭める手法です。探索を全バンクではなく最も妥当な領域に集中させることで、共同研究のパイプライン内で実用的に使える形にします。

TESLA-X はその考えを拡張し、レンズ注入信号からターゲット母集団モデルを構築して、しきい値下問題により合ったバンクを定義します。汎用的な発見能力ではなく、物理的に整合した暗い像を回収する確率を高めることが目的です。

## TESLA

<p>TESLA はターゲットイベントを中心に縮小バンクを作り、しきい値下候補を背景と比較してランク付けします。目的は、LVK 解析ワークフローで扱える規模を保ちながら、必要なパラメータ領域への感度を維持することです。</p>

<div class="split-feature">
  <div>
    <p>TESLA の図は、ターゲットイベントから始め、周辺にシミュレーション注入を生成し、探索を実行し、注入を回収できるテンプレートだけを残す流れを示しています。縮小バンクが、広い探索をターゲット探索へ変える鍵です。</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="4800">
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/tesla_workflow_2021.png' | relative_url }}" alt="TESLA ターゲット型しきい値下レンズ探索ワークフロー">
      <figcaption class="caption"><a href="https://arxiv.org/abs/1904.06020">arXiv:1904.06020</a> の TESLA ターゲット型しきい値下探索ワークフロー。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/tesla_targeted_bank_2021.png' | relative_url }}" alt="TESLA ターゲットバンク比較">
      <figcaption class="caption">元の O3 バンクと比較した TESLA ターゲットバンク。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/tesla_pe_bank_2021.png' | relative_url }}" alt="TESLA パラメータ推定バンク比較">
      <figcaption class="caption">元の O3 バンクと比較した TESLA パラメータ推定バンク。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/tesla_performance_targeted_2021.png' | relative_url }}" alt="TESLA ターゲットバンク性能図">
      <figcaption class="caption">combined FAR に対する TESLA ターゲットバンク性能。</figcaption>
    </figure>
  </div>
</div>

## TESLA-X

<p>TESLA-X は同じ基本論理を使いますが、レンズ注入信号をソース母集団モデルへ変換する点でさらに進んでいます。これにより、縮小バンクはより物理的な形を持ち、実際に関心のある弱い像の問題により代表的になります。</p>

<div class="split-feature reverse">
  <div>
    <p>TESLA-X のスライドは、概念図から実装、テンプレートバンク比較、感度図までの流れを示します。しきい値下レンズ信号に対して、汎用テンプレートバンクよりよく適合する理由を示しています。</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="5200">
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_reduced_bank_2023.png' | relative_url }}" alt="TESLA-X 縮小バンク概念図">
      <figcaption class="caption"><a href="https://arxiv.org/abs/2311.06416">arXiv:2311.06416</a> の TESLA-X 縮小バンク概念図。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_workflow_2311_06416.png' | relative_url }}" alt="TESLA-X ワークフロー">
      <figcaption class="caption">TESLA-X ワークフロー。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_template_bank_2023.png' | relative_url }}" alt="TESLA-X ターゲットテンプレートバンク比較">
      <figcaption class="caption">TESLA-X テンプレートバンク比較。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_sensitivity_m1m2_2023.png' | relative_url }}" alt="TESLA-X 感度図">
      <figcaption class="caption">質量比空間での TESLA-X 感度図。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_sensitivity_ae_2023.png' | relative_url }}" alt="SNR 空間での TESLA-X 感度図">
      <figcaption class="caption">有効スピン空間での TESLA-X 感度図。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/teslax_kde_mass_model_2023.png' | relative_url }}" alt="TESLA-X KDE からソース母集団モデルへ">
      <figcaption class="caption">ターゲット質量モデル構築に使った TESLA-X ソース母集団 KDE。</figcaption>
    </figure>
  </div>
</div>

## レンズ追観測のための天空位置推定

<p>レンズ問題のもう一つの側面は位置推定です。弱いレンズ像を回収できても、母銀河探索、レンズ構造研究、マルチメッセンジャー追観測に使えるだけ天空領域が小さくなければ、科学的な価値は限られます。</p>

<div class="split-feature">
  <div>
    <p>このディレクトリのレンズ位置推定論文は、その問題を調べています。強レンズを受けたコンパクト連星合体のシミュレーションと Bayestar スカイマップを用い、複数のレンズ像を組み合わせることで位置推定が単調に改善することを示しました。</p>
    <p>最大の改善は2番目の像から得られ、2像系は最良の単一像に比べて典型的に約1桁改善します。4像では典型的な位置推定面積が 10 から 100 deg<sup>2</sup> の範囲に入り、母銀河同定やターゲット追観測が現実的になります。</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="5000">
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_cdf_2img_including_sub.png' | relative_url }}" alt="2像系の90パーセント信用領域面積 CDF">
      <figcaption class="caption">しきい値下像を含む2像系。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_cdf_4img_including_sub.png' | relative_url }}" alt="4像系の90パーセント信用領域面積 CDF">
      <figcaption class="caption">しきい値下像を含む4像系。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_median_vs_n_split.png' | relative_url }}" alt="像数に対する中央値の位置推定面積">
      <figcaption class="caption">像数に対する 90% 信用領域面積の中央値。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_hist_2img_combined.png' | relative_url }}" alt="2像系の位置推定面積分布">
      <figcaption class="caption">2像系の位置推定面積分布。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/lensingloc_hist_4img_inclusive.png' | relative_url }}" alt="4像系の位置推定面積分布">
      <figcaption class="caption">4像系の位置推定面積分布。</figcaption>
    </figure>
  </div>
</div>

## LVK 観測ラン論文

<p>私の手法開発は、O3 から O4 に続く LVK 観測ランのレンズ論文につながっています。研究は、ターゲット型しきい値下探索から、共同研究全体の解析と編集責任へと広がりました。</p>

<div class="research-list">
  <section class="research-item">
    <span class="research-number">01</span>
    <div>
      <h3>O3a レンズ論文</h3>
      <p><strong>O3a 解析</strong>は、第三観測ラン前半における重力レンズ効果の共同研究レベル探索を確立しました。私の<strong>ターゲット探索開発</strong>は、この解析系列の方法論的基盤となりました。</p>
    </div>
  </section>

  <section class="research-item">
    <span class="research-number">02</span>
    <div>
      <h3>O3b と O4a レンズ論文</h3>
      <p>O3b と O4a のレンズ論文では、<strong>解析担当</strong>および <strong>Editorial Team Member</strong> として、解析ワークフロー、検証、論文準備に貢献しました。</p>
    </div>
  </section>

  <section class="research-item">
    <span class="research-number">03</span>
    <div>
      <h3>O4b レンズ論文</h3>
      <p>O4b レンズ論文の <strong>Editorial Team Chair</strong> として執筆プロセスを調整し、一貫した最終解析ナラティブへ向けて共同研究を支えています。<a href="{{ '/ja/interests/gwtc5-o4b-lensing-incident/' | relative_url }}">GWTC-5/O4b の検証とガバナンスをめぐる論争</a>についての専用ページも作成しました。</p>
    </div>
  </section>
</div>

## 関連論文

<ul class="list-clean">
  <li><strong><a href="https://arxiv.org/abs/1901.02674">Search for gravitational lensing signatures in LIGO-Virgo binary black hole events</a></strong><br><span class="meta">後のターゲット探索と共同研究全体の解析の背景となった初期の LVK レンズ探索。</span></li>
  <li><strong><a href="https://arxiv.org/abs/1904.06020">Targeted Sub-threshold Search for Strongly-lensed Gravitational-wave Events</a></strong><br><span class="meta">縮小テンプレートバンクを用いて弱いレンズ対応信号を回収する TESLA フレームワークを導入。</span></li>
  <li><strong><a href="https://arxiv.org/abs/2311.06416">TESLA-X: An effective method to search for sub-threshold lensed gravitational waves with a targeted population model</a></strong><br><span class="meta">レンズ注入に基づく母集団モデルとターゲットテンプレートバンクにより TESLA を拡張。</span></li>
  <li><strong><a href="https://arxiv.org/abs/2604.16561">A First Investigation of Repeated-Signal Localization of Strongly Lensed Gravitational Waves for Multimessenger Astronomy</a></strong><br><span class="meta">複数のレンズ像を組み合わせることで天空位置推定が改善し、母銀河追観測を支えることを示す研究。</span></li>
</ul>

## 関連ページ

<ul class="list-clean">
  <li><strong><a href="{{ '/ja/research/' | relative_url }}">研究概要</a></strong><br><span class="meta">より広い技術的概要と出版リスト。</span></li>
  <li><strong><a href="{{ '/ja/interests/gwtc5-o4b-lensing-incident/' | relative_url }}">GWTC-5 / O4b レンズ論文の事案</a></strong><br><span class="meta">O4b レンズ論文をめぐる検証、ガバナンス、出版戦略上の論争についての一人称の記録。</span></li>
  <li><strong><a href="{{ '/ja/interests/sky-localization/' | relative_url }}">天空位置推定</a></strong><br><span class="meta">反復像と母銀河ターゲティング。</span></li>
</ul>
