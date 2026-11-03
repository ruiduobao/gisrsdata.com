---
title: "MAPL-EMIT: Modeled Methane Plumes"
date: 2026-11-03 12:00:00
permalink: /pages/d9121f09/
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

# MAPL-EMIT: Modeled Methane Plumes

## 数据集简介

The Methane Analysis and Plume Localization with EMIT (MAPL-EMIT) dataset provides high-resolution (60m) methane (CH₄) plume complex maps and plume source locations derived from radiance data captured by the Earth Surface Mineral Dust Source Investigation (EMIT) instrument.

Methane point-source emissions are a major driver of near-term climate forcing. Traditional space-based identification methods often rely on manual analyst review or matched-filter techniques that can miss smaller emissions and are laborious to characterize and delineate. MAPL-EMIT addresses this using a deep learning vision transformer framework that simultaneously analyzes the full radiance spectrum and the spatial context of neighboring pixels. Validated on millions of synthetic plumes and real-world benchmarks, the model provides automated plume detection across full-granule radiances, estimating per-plume spatial extents, column integrated enhancements (ppm-m increase over background) and source locations.

This dataset provides model-predicted outputs for methane plume complexes. For each identified plume, the dataset provides the corresponding methane enhancements, an instance mask delineating the plume's shape, and the most likely source location. You can also explore and visualize the plumes interactively through the [MAPL-EMIT EE App](https://nature-trace.projects.earthengine.app/view/mapl-emit). If you are interested in granule level enhancements and plume probabilities, please see
[MAPL-EMIT Enhancements](https://developers.google.com/earth-engine/datasets/catalog/projects_climate-and-sustainability_assets_ghg_emit_mapl_emit_enhancements_v1_0)

Each plume has a 'confidence' property containing one of the following confidence scores:

* **High confidence:** Plumes detected three or more times across different EMIT observations over time. Human review of a random subset of these plumes yielded a false positive rate of ~3-5%. This low error rate is comparable to existing human-annotated datasets, making high-confidence plumes suitable for direct downstream use.
* **Medium confidence:** Plumes without a temporal match across multiple EMIT observations. Human review indicates a false positive rate of ~50-55% for this category. Due to the high likelihood of false positives, users should exercise caution and apply secondary filtering before downstream analysis. Recommended filtering strategies include matching plumes with known infrastructure, analyzing spectral signatures, applying d_norm or d_cor spectral scores, and cross-referencing with local wind direction.

**Example Uses:**

* **Automated Plume Delineation & Source Localization:** Identifying the spatial footprint of methane plumes and attributing them to specific infrastructure features (e.g., wells, landfills, compressor stations), even amid overlapping plumes.
* **Global Methane Tracking:** Scanning the complete EMIT data catalog to automatically construct a comprehensive database of global methane point sources.
* **Impact Quantification:** Combining instance masks and enhancement values to estimate leak severity from previously undetected or uncaptured sources.

**Limitations:**

* **False Positives:** Automated detection inherently carries a risk of false positives. When utilizing medium-confidence plumes, it is critical to treat detections as candidates and filter them against known locations of physical infrastructure, employ temporal aggregations to confirm persistent sources, or other verification methods.
* **False Negatives:** The model may miss some plumes, particularly those with low enhancements or small spatial extents. Approximately 16% of expert-annotated NASA EMIT L2B plumes are missed by the model.
* **Enhancement vs. emission rate:** Reported pixel values represent atmospheric column enhancements (ppm-m), not emission rates (kg/hr). Estimating emission flux requires using methods like IME along with external wind fields and introduces additional uncertainty.
* **Instrument coverage:** Data coverage is constrained by EMIT's orbital sampling and field-of-view; observations are only available for locations and times when the instrument collected measurements from the International Space Station.
* **Environmental Factors:** Model performance degrades in scenarios with heavy cloud cover, shadows, or low-albedo (dark) surfaces, which reduce the quality of the hyperspectral radiance signal.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/climate-and-sustainability/assets/ghg/emit/mapl_emit_plumes_v1_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google Research、Google Earth Engine
- 时间范围：2022-08-10 至 2026-06-09
- 空间分辨率：60 米
- 许可：CC-BY-4.0
- 关键词：atmosphere, emit, ghg, methane

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| methane_enhancement | Methane enhancement | 60 |  |
| plume_probability | Plume probability | 60 |  |
| origin_probability | Origin probability | 60 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/climate-and-sustainability/assets/ghg/emit/mapl_emit_plumes_v1_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_climate-and-sustainability_assets_ghg_emit_mapl_emit_plumes_v1_0
- 数据引用：Batchu, V. V., Conserva, M., Wilson, A., Michalak, A. M., Gulshan, V., Brodrick, P. G., Thorpe, A. K., & Arsdale, C. V. (2026). Global monitoring of methane point sources using deep learning on hyperspectral radiance measurements from EMIT. arXiv preprint arXiv:2604.10094.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
