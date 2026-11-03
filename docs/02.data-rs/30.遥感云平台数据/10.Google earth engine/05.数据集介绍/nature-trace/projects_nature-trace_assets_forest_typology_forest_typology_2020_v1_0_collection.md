---
title: "Forest Typology (ForTy) 2020 v1.0"
date: 2026-11-03 12:00:00
permalink: /pages/0dd1f91c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alphaearth-derived"
  - "biodiversity"
  - "climate"
  - "conservation"
  - "deforestation"
  - "eudr"
  - "forest"
  - "forest-biomass"
---

# Forest Typology (ForTy) 2020 v1.0

## 数据集简介

The Forest Typology (ForTy) v1 dataset consists of a global per-class
probability map at 10 m resolution covering all land areas between
65°S and 84°N latitude for the year 2020.

The six-class typology is aligned with FAO and EU Deforestation
Regulation (EUDR) definitions:

* Class 1 – Primary Forest: Natural forest of native species with no
visible indications of human-caused disturbance.
* Class 2 – Naturally Regenerating Forest: Forests predominantly
established through natural regeneration, including secondary forests
recovering from disturbance and mixed forests where natural
regeneration dominates.
* Class 3 – Planted Forest: Forests established predominantly through
planting or seeding, with an operational rotation period exceeding
40 years.
* Class 4 – Plantation Forest: Intensively managed forests
characterized by one or two species, even age, regular spacing, and
a rotation period of 40 years or less.
* Class 5 – Tree Crops and Agroforestry: Agricultural plantations
producing commodities other than wood (e.g., oil palm, rubber, fruit
orchards), including agroforestry systems. Classified as agricultural
land use under EUDR.
* Class 6 – Other Land: All non-tree land uses, sparse woody
vegetation (canopy cover < 10%), other wooded land, trees in urban
environments, and small tree patches that do not meet forest
thresholds.

The primary data record is a five-band raster containing unsigned 8-bit
integer values (0–250) representing quantized probability values for
each of five forest type classes. The probability for the sixth class
(Other land) is obtained as the complement: p_other = 250 − sum(p_i).
The map uses the Universal Transverse Mercator (UTM) coordinate system.

To get the probability score of the sixth, "Other land" class, you to
subtract from 250 the sum of the first five probabilities. A categorical
map can be derived by assigning each pixel to the class with the highest
probability (argmax). The probability
representation enables users to apply custom thresholds, assess
prediction confidence, and compute uncertainty estimates for downstream
applications.

The source data is provided as Cloud Optimized GeoTIFFs (COGs) stored
on Google Cloud Storage at
`gs://nature-trace/export_rasters/forest_typology_2020_v1_0/`. The
Earth Engine ImageCollection is backed by these COGs.

Limitations: While this map provides a valuable global baseline, users
should be aware of several limitations:

* Temporal reference date: The map represents the state of land cover
as of the year 2020, based on multi-temporal satellite composites.
Rapid land-use changes occurring within the compositing period may not
be fully captured.
* Definitional ambiguity: The FAO-based definitions underlying the
EUDR classification rely on management intent and history, which are
not directly observable from satellite imagery. The model infers these
categories from proxy indicators (spectral signatures, canopy
structure, spatial patterns), introducing irreducible uncertainty at
class boundaries. For example, mature naturally regenerating
(secondary) forests can be spectrally and structurally
indistinguishable from undisturbed primary forests.
* Agroforestry ambiguity: Mixed agroforestry systems—where tree crops
such as cocoa or coffee grow beneath a native canopy—are among the
most challenging classes to resolve. Shaded cocoa and coffee
agroforests can still be misclassified as natural forest in some
regions.
* Planted forest confusion: Planted forests exhibit the lowest
classification accuracy among all forest classes (F1 = 58.2%). This
class can be spectrally and structurally similar to naturally
regenerating forests at one end and to plantation forests at the
other, resulting in frequent misclassification in both directions.
* Small patches and threshold canopy coverage: Isolated tree patches
near the FAO forest area threshold (0.5 ha) and areas at the canopy
cover boundary (10%) are inherently ambiguous.
* Probability calibration: The per-class probabilities represent
ensemble-averaged softmax outputs and have not been post-hoc
calibrated. Users requiring well-calibrated probabilities for
quantitative risk assessment should consider regional recalibration
using independent reference data.
* Wildfires: It is not always possible to determine the land use
after a wildfire.
* Conservative primary forest mapping: The primary forest class
boundary is conservative near human infrastructure. Due to a spatial
buffering effect inherited from the training data, the model
systematically excludes forest edges near roads, settlements, or
agriculture from the primary forest class, often labeling them as
naturally regenerating instead.
* Temporarily unstocked areas: Under FAO definitions, temporarily
unstocked areas (such as recently harvested plantations awaiting
replanting or forests in early post-disturbance recovery) are still
considered forest. However, because this map relies on a single year
of observations (2020), these areas may appear as non-forest and be
misclassified as "Other Land."
* Planted vs. plantation proxy: The distinction between planted and
plantation forests uses an operational 40-year rotation threshold as
a proxy. True EUDR/FAO management intensity criteria (e.g., even-aged
class, regular spacing) are not directly observable from satellite
imagery.
* Other Wooded Land (OWL) omission: The EUDR recognizes "Other Wooded
Land" (OWL) as a distinct category, but in this dataset, OWL is not
resolved as a separate class and is entirely subsumed into the
"Other Land" category.
* Sub-pixel heterogeneity: Mixed pixels, particularly in complex
smallholder landscapes, can reduce classification precision.
Additionally, while the output is at 10 m, the effective resolution
of the model's input data might be coarser than 10 m.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/nature-trace/assets/forest_typology/forest_typology_2020_v1_0_collection`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2020-01-01 至 2020-12-31
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：alphaearth-derived, biodiversity, climate, conservation, deforestation, eudr, forest, forest-biomass

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| PrimaryForest | Quantized probability (unsigned 8-bit integer, 0–250) that the pixel belongs to the primary forest class.  | 10 |  |
| NaturallyRegeneratingForest | Quantized probability (unsigned 8-bit integer, 0–250) that the pixel belongs to the naturally regenerating forest class.  | 10 |  |
| PlantedForest | Quantized probability (unsigned 8-bit integer, 0–250) that the pixel belongs to the planted forest class.  | 10 |  |
| PlantationForest | Quantized probability (unsigned 8-bit integer, 0–250) that the pixel belongs to the plantation forest class.  | 10 |  |
| TreeCropsAndAgroforestry | Quantized probability (unsigned 8-bit integer, 0–250) that the pixel belongs to the tree crops and agroforestry class. The probability for the sixth class (Other land) is obtained as the complement: p_other = 250 − sum of all five band values.  | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/nature-trace/assets/forest_typology/forest_typology_2020_v1_0_collection');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_forest_typology_forest_typology_2020_v1_0_collection
- 数据引用：Maxim Neumann, Anton Raichuk, Peter Potapov, Myroslava Lesiv,
Matthew Overlan, Melanie Rey, Ravindran Rajakumar, Michelangelo
Conserva, Radost Stanimirova, Michelle Sims, Sarah Carter,
Elizabeth Goldman, Yuchang Jiang, Linus Scheibenreif, Ivelina
Georgieva, Maria Shchepashchenko, Steffen Fritz, Nicholas Clinton,
Charlotte Stanton, Dan Morris, Drew Purves: "Global forest typology
at 10-meter resolution for forest and land-use monitoring", May 2026
(preprint:
[doi.org/10.31223/X58R27](https://doi.org/10.31223/X58R27)).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
