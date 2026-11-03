---
title: "Species Distribution, Australia Mammals"
date: 2026-11-03 12:00:00
permalink: /pages/5f62c483/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alphaearth-derived"
  - "biodiversity"
  - "conservation"
  - "ecosystems"
  - "species"
---

# Species Distribution, Australia Mammals

## 数据集简介

These species distribution model outputs, developed by Google in
collaboration with [QCIF](https://www.qcif.edu.au/) and
[EcoCommons](https://www.ecocommons.org.au/), represent estimates of
species’ relative occurrence likelihoods (i.e., higher values indicate a
higher likelihood that the species would be detected at a location, for a
given survey methodology and given survey effort, compared to lower values).

They were generated using a multi-species
heterogenous graph neural network model
trained jointly on species observation data from the
[Global Biodiversity Information Facility](https://www.gbif.org/) for 174
Australian mammals from 2017 - 2024 (inclusive), combined with species
[trait](https://figshare.com/articles/dataset/COMBINE_a_Coalesced_Mammal_Database_of_Intrinsic_and_extrinsic_traits/13028255/4) and taxonomy data for the same species from COMBINE,
and satellite and environmental as embedded by
[AlphaEarth Foundations](https://deepmind.google/discover/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/).
[A previous phase of this work and the model architecture are described here](https://ar5iv.labs.arxiv.org/html/2503.11900).
Estimates of species’ geographical distributions are made at c. 1km resolution (S2 cells level 13).

These distributions are intended to support conservation initiatives like
the [Global Biodiversity Framework](https://www.cbd.int/gbf/targets), which
includes [30x30](https://en.wikipedia.org/wiki/30_by_30). It is likely that
distributions could be significantly improved via fine tuning with
additional species observation data, where this is available.

Limitations:

* Experimental Status: These results are intended as demonstrations of early
  research and have not yet been peer-reviewed.
* Aggregate vs. Specific Validation: Model outputs for an earlier run described in the paper have been evaluated
  collectively against expert-produced Area of Habitation maps (mean [ROC AUC](https://bookdown.org/pjhanly/fw840hanly/week-4-species-distribution-models.html#area-under-the-curve-auc)
  = 0.89 over all species,  AUC ROC > 0.9 for each of the released
  species), but have not been vetted by species experts on a
  species-by-species basis.
* Presence-Only Data Constraints: These models are trained primarily on
  presence-only data. Outputs represent a relative likelihood of detection
  given current survey efforts, rather than true probability of occupancy.
* Input Data Bias: The accuracy of these maps is intrinsically linked to the
  input datasets. Biodiversity observation data is known to contain spatial,
  temporal, and taxonomic biases (often reflecting accessibility near roads
  or population centers rather than true biological distribution). The
  availability of species observation data has also been found to [reflect
  social and political inequities](https://www.science.org/doi/abs/10.1126/science.adh8874).
  These biases may be propagated into the final model outputs.

This experimental preview was released November 5, 2025.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/nature-trace/assets/species_distribution_models/australia_mammals/v0`
- 数据类型：影像（Image）
- 提供方：Google、Google Earth Engine
- 时间范围：2017-01-01 至 2025-01-01
- 空间分辨率：1000 米
- 许可：CC-BY-4.0
- 关键词：alphaearth-derived, biodiversity, conservation, ecosystems, species

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| AgileAntechinus | Likelihood of Agile Antechinus occurrence (scaled to [0-250]) | 1000 |  |
| AustralianSwampRat | Likelihood of Australian Swamp Rat occurrence (scaled to [0-250]) | 1000 |  |
| BlackFlyingFox | Likelihood of Black flying fox occurrence (scaled to [0-250]) | 1000 |  |
| BrownAntechinus | Likelihood of Brown Antechinus occurrence (scaled to [0-250]) | 1000 |  |
| Brush-TailedPhascogale | Likelihood of Brush-tailed Phascogale occurrence (scaled to [0-250]) | 1000 |  |
| Brush-TailedRock-Wallaby | Likelihood of Brush-tailed Rock-wallaby occurrence (scaled to [0-250]) | 1000 |  |
| BushRat | Likelihood of Bush Rat occurrence (scaled to [0-250]) | 1000 |  |
| CommonRingtailPossum | Likelihood of Common Ringtail Possum occurrence (scaled to [0-250]) | 1000 |  |
| CommonWombat | Likelihood of Common Wombat occurrence (scaled to [0-250]) | 1000 |  |
| EasternGreyKangaroo | Likelihood of Eastern Grey Kangaroo occurrence (scaled to [0-250]) | 1000 |  |
| GreaterGlider | Likelihood of Greater Glider occurrence (scaled to [0-250]) | 1000 |  |
| HastingsRiverMouse | Likelihood of Hastings River Mouse occurrence (scaled to [0-250]) | 1000 |  |
| LeadbeatersPossum | Likelihood of Leadbeater's Possum occurrence (scaled to [0-250]) | 1000 |  |
| Long-NosedBandicoot | Likelihood of Long-nosed Bandicoot occurrence (scaled to [0-250]) | 1000 |  |
| Long-NosedPotoroo | Likelihood of Long-nosed Potoroo occurrence (scaled to [0-250]) | 1000 |  |
| LumholtzsTree-Kangaroo | Likelihood of Lumholtz's Tree-kangaroo occurrence (scaled to [0-250]) | 1000 |  |
| MountainBrushtailPossum | Likelihood of Mountain Brushtail Possum occurrence (scaled to [0-250]) | 1000 |  |
| NorthernBrownBandicoot | Likelihood of Northern Brown Bandicoot occurrence (scaled to [0-250]) | 1000 |  |
| Platypus | Likelihood of Platypus occurrence (scaled to [0-250]) | 1000 |  |
| Short-EaredPossum | Likelihood of Short-eared Possum occurrence (scaled to [0-250]) | 1000 |  |
| SouthernBrownBandicoot | Likelihood of Southern Brown Bandicoot occurrence (scaled to [0-250]) | 1000 |  |
| SquirrelGlider | Likelihood of Squirrel Glider occurrence (scaled to [0-250]) | 1000 |  |
| SwampWallaby | Likelihood of Swamp Wallaby occurrence (scaled to [0-250]) | 1000 |  |
| WesternGreyKangaroo | Likelihood of Western Grey Kangaroo occurrence (scaled to [0-250]) | 1000 |  |
| Yellow-FootedAntechinus | Likelihood of Yellow-footed Antechinus occurrence (scaled to [0-250]) | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('projects/nature-trace/assets/species_distribution_models/australia_mammals/v0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_species_distribution_models_australia_mammals_v0
- 数据引用：Google LLC, "Australian mammal species distributions" (2025). Available online at https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_species_distribution_models_australia_mammals_v0.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
