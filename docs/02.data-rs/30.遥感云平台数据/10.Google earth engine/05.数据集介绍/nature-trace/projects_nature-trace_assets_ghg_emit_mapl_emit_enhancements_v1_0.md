---
title: "MAPL-EMIT: Modeled Methane Enhancement and Plume Probability [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/9d56755f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "emit"
  - "ghg"
  - "methane"
---

# MAPL-EMIT: Modeled Methane Enhancement and Plume Probability [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Methane Analysis and Plume Localization with EMIT (MAPL-EMIT) enhancements dataset provides high-resolution (60m) methane (CH₄) enhancement maps and plume probabilities derived from radiance data captured by the Earth Surface Mineral Dust Source Investigation (EMIT) instrument which were generated and released as part of the research paper: "Publication to be updated, preprint: [https://arxiv.org/abs/2604.10094](https://arxiv.org/abs/2604.10094)"

Methane point-source emissions are a major driver of near-term climate forcing. Traditional space-based identification methods often rely on manual analyst review or matched-filter techniques that can miss smaller plumes. MAPL-EMIT addresses this using a deep learning vision transformer framework that simultaneously analyzes the full radiance spectrum and the spatial context of neighboring pixels. Validated on millions of synthetic plumes and real-world benchmarks, the model achieves significantly lower detection limits, capturing weaker plumes and more plausible emissions than human analysts.

This dataset provides model-generated granule-level methane enhancements (in ppm-m) along with plume probability scores for each pixel. You can also explore and visualize the enhancement data interactively through the [MAPL-EMIT EE App](https://nature-trace.projects.earthengine.app/view/mapl-emit). If you are interested in plume level data, please see [MAPL-EMIT Plumes](https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_ghg_emit_mapl_emit_plumes_v1_0).

The data is provided on a per-pixel basis:

* **Enhancements:** The estimated column-integrated methane enhancement (ppm-m).
* **Plume Probability:** A score (0 to 1) representing the model's confidence that the pixel contains a methane plume.

**Example Uses:**

* **Enhancement based flux inversion:** Using the granule level enhancements paired with winds and other relevant sources to produce flux inversion estimates. 
* **Algorithm Development & Cross-Validation:** Utilizing the raw pixel-level enhancements and probabilities to develop custom plume identification algorithms, or comparing against other retrieval techniques.
* **Detailed Morphological Studies:** Analyzing the continuous spread and diffusion of a plume without relying on pre-computed discrete bounding polygons.

**Limitations:**

* **Enhancement noise:** The enhancements can be noisy, especially when we are looking at very low enhancements which can either be missed out by the model entirely or incorrectly estimated. We observe that the SNR (signal-to-noise ratio) for MAPL-EMIT enhancements is much higher than Matched Filter or other approaches, however, noise still exists and should be handled accordingly.
* **Instrument coverage:** Data coverage is constrained by EMIT's orbital sampling and field-of-view; observations are only available for locations and times when the instrument collected measurements from the International Space Station.
* **Environmental Factors:** Model performance degrades in scenarios with heavy cloud cover, shadows, or low-albedo (dark) surfaces, which reduce the quality of the hyperspectral radiance signal.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/nature-trace/assets/ghg/emit/mapl_emit_enhancements_v1_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google Research、Google Earth Engine
- 时间范围：2022-08-10 至 2026-06-09
- 空间分辨率：60 米
- 许可：CC-BY-4.0
- 关键词：atmosphere, emit, ghg, methane

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| methane_enhancement | Methane enhancement (ppm-m) | 60 |  |
| plume_probability | Plume probability | 60 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/nature-trace/assets/ghg/emit/mapl_emit_enhancements_v1_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_ghg_emit_mapl_emit_enhancements_v1_0
- 数据引用：Batchu, V. V., Conserva, M., Wilson, A., Michalak, A. M., Gulshan, V., Brodrick, P. G., Thorpe, A. K., & Arsdale, C. V. (2026). Global monitoring of methane point sources using deep learning on hyperspectral radiance measurements from EMIT. arXiv preprint arXiv:2604.10094.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
