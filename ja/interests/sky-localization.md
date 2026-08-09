---
layout: default
title: 天空位置推定
nav_key: interests
permalink: /ja/interests/sky-localization/
lang: ja
alternate_url: /interests/sky-localization/
description: "Alvin Ka Yue Li による重力波源の天空位置推定と追観測研究。"
---

# 天空位置推定

<p class="lead">検出器配置と感度が重力波スカイマップをどう形作るかを、電磁波追観測とレンズ効果を考慮した位置推定に重点を置いて研究しています。</p>

<div class="research-summary">
  <div>
    <span class="summary-label">主題</span>
    <strong>LVK 天空位置推定</strong>
  </div>
  <div>
    <span class="summary-label">主要結果</span>
    <strong>KAGRA は基線と相補的なアンテナ応答を加える</strong>
  </div>
  <div>
    <span class="summary-label">用途</span>
    <strong>マルチメッセンジャー天文学と強レンズ追観測</strong>
  </div>
</div>

このディレクトリの KAGRA 感度研究は、検出器ネットワークの効果を直接定量化しています。連星中性子星の注入信号と放射計的・コヒーレンスに基づく位置推定手法を用い、KAGRA の感度を 1 から 250 Mpc まで変化させたときに天空面積がどう変わるかを追跡しました。重要なのは単一のしきい値ではなく、連続的な改善です。現在の KAGRA の約 10 Mpc 程度のスケールでも、追加の基線とアンテナパターンにより測定可能な位置推定能力が得られます。

## なぜ重要か

天空位置推定は、トリガーと有用な追観測キャンペーンをつなぐボトルネックです。強レンズ系では、像を同定するときにも、その像を母銀河やレンズモデルに結びつけるときにも重要です。通常の連星中性子星の位置推定を改善する検出器幾何の効果は、レンズイベント追観測の基盤にもなります。

## 代表的な論文

<ul class="list-clean">
  <li><strong><a href="https://arxiv.org/abs/2604.13580">Investigating the effect of sensitivity of KAGRA on sky localization of gravitational-wave sources from compact binary coalescences</a></strong><br><span class="meta">KAGRA の感度と基線が連星中性子星信号の位置推定をどう改善するかを定量化。</span></li>
  <li><strong><a href="{{ '/ja/interests/targeted-lensing/' | relative_url }}">強レンズ位置推定研究</a></strong><br><span class="meta">複数のレンズ像を組み合わせることで追観測用の天空面積が縮小することを示します。</span></li>
  <li><strong><a href="https://arxiv.org/abs/2308.04545">Low-latency gravitational wave alert products and their performance at the time of the fourth LIGO-Virgo-KAGRA observing run</a></strong><br><span class="meta">追観測に役立つためには天空位置推定が迅速に利用可能である必要があることを示します。</span></li>
</ul>

<div class="split-feature">
  <div>
    <p>KAGRA 位置推定論文では、ネットワーク側の機構を明示しました。KAGRA は異なるアンテナパターンと新しい幾何学的基線を加えるため、比較的弱い検出器でも天空上のタイミング縮退を減らせます。</p>
    <p>イベントごとのスカイマップも同じ傾向を視覚的に示します。KAGRA の感度が上がるにつれて、リング状の事後分布がよりコンパクトになります。強レンズ追観測にとって、これは理論上の候補を観測対象へ近づける差です。</p>
  </div>
  <div class="slideshow" data-slideshow data-interval="4800">
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_antenna_pattern.png' | relative_url }}" alt="LVK 検出器のアンテナ応答パターン">
      <figcaption class="caption">LVK 検出器のアンテナ応答パターン、<a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_fraction_le_100_hlvk.png' | relative_url }}" alt="100平方度以内に位置推定されたイベント割合">
      <figcaption class="caption">100 deg<sup>2</sup> 以内に位置推定されたイベント割合、<a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_median_area_hlvk.png' | relative_url }}" alt="KAGRA レンジに対する90パーセント信用領域面積の中央値">
      <figcaption class="caption">KAGRA レンジに対する 90% 信用領域面積の中央値、<a href="https://arxiv.org/abs/2604.13580">arXiv:2604.13580</a>。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_skymap_1.png' | relative_url }}" alt="KAGRA の寄与なしのイベントごとのスカイマップ">
      <figcaption class="caption">KAGRA の寄与なしのイベントごとのスカイマップ。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_skymap_7.png' | relative_url }}" alt="中間的な KAGRA 感度でのイベントごとのスカイマップ">
      <figcaption class="caption">中間的な KAGRA 感度でのイベントごとのスカイマップ。</figcaption>
    </figure>
    <figure class="slideshow-slide">
      <img src="{{ '/assets/images/kagra_skyloc_skymap_13.png' | relative_url }}" alt="高い KAGRA 感度でのイベントごとのスカイマップ">
      <figcaption class="caption">高い KAGRA 感度でのイベントごとのスカイマップ。</figcaption>
    </figure>
  </div>
</div>

<p>強レンズイベントでは、複数の像が同じ源について追加情報を与えるため、位置推定が改善します。実用上は、天空領域が小さくなり、母銀河ターゲティングやレンズ構造同定の可能性が高まります。</p>

## 関連ページ

<ul class="list-clean">
  <li><strong><a href="{{ '/ja/research/' | relative_url }}">研究概要</a></strong><br><span class="meta">より広い技術的背景と出版物。</span></li>
  <li><strong><a href="{{ '/ja/interests/targeted-lensing/' | relative_url }}">ターゲット型レンズ探索</a></strong><br><span class="meta">反復信号としきい値下イベント。</span></li>
  <li><strong><a href="{{ '/ja/interests/low-latency/' | relative_url }}">低レイテンシ検出</a></strong><br><span class="meta">位置推定は迅速に利用できるときに最も有用です。</span></li>
</ul>
