---
title: "WRI/Google DeepMind Global Drivers of Forest Loss 2001-2025 v1.3"
date: 2026-11-03 12:00:00
permalink: /pages/a08e035d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "deforestation"
  - "forest"
  - "forest-biomass"
  - "google"
  - "landuse"
  - "wri"
---

# WRI/Google DeepMind Global Drivers of Forest Loss 2001-2025 v1.3

## 数据集简介

This dataset maps the dominant driver of tree cover loss from 2001-2025 globally at 1 km resolution. 
Produced by the World Resources Institute (WRI) and Google DeepMind, the data were developed using 
a global neural network model (ResNet) trained on a set of samples collected through visual 
interpretation of very high-resolution satellite imagery. The model used satellite imagery 
(Landsat 7 & 8, Sentinel-2) and ancillary data to classify seven driver categories: 
permanent agriculture, hard commodities, shifting cultivation, logging, wildfires, 
settlements and infrastructure, and other natural disturbances. An independent stratified random 
sample collected through interpretation of very high resolution satellite imagery was used to 
estimate the accuracy of the map. 

A *driver* is defined as the direct cause of tree cover loss, and can include both temporary 
disturbances (natural or anthropogenic) or permanent loss of tree cover due to a change to 
a non-forest land use (e.g., deforestation).  The *dominant* driver is defined as the 
direct driver that caused the majority of tree cover loss within each 1 km cell over the time 
period. Classes are defined as follows:

* Permanent agriculture: Long-term, permanent tree cover loss for small- to large-scale agriculture. 
This includes perennial tree crops, as well as pasture and seasonal crops and cropping systems, 
which may include a fallow period. Agricultural activities are considered "permanent" if there 
is visible evidence that they persist following the tree cover loss event and are not a part of 
a temporary cultivation cycle. 
* Hard commodities: Loss due to the establishment or expansion of mining or energy infrastructure.
* Shifting cultivation: Tree cover loss due to small- to medium-scale clearing for temporary 
cultivation that is later abandoned and followed by subsequent regrowth of secondary forest or 
vegetation.
* Logging: Forest management and logging activities occurring within managed, natural or semi-natural 
forests and plantations, often with evidence of forest regrowth or planting in subsequent years. 
Includes clear-cut and selective logging, establishment of logging roads, forest thinning, and 
salvage or sanitation logging. 
* Wildfire: Tree cover loss due to fire with no visible human conversion or agricultural activity 
afterward. Fires may be started by natural causes (e.g. lightning) or may be related to human 
activities (accidental or deliberate).
* Settlements and infrastructure: Tree cover loss due to expansion and intensification of roads, 
settlements, urban areas, or built infrastructure (not associated with other classes).
* Other natural disturbances: Tree cover loss due to other non-fire natural disturbances 
(e.g., landslides, insect outbreaks, river meandering). If loss due to natural causes is followed 
by salvage or sanitation logging, it is classified as logging.

**Limitations**: This product does not distinguish between the loss of *natural forest* and *planted 
trees* (e.g., plantations, tree crops, or agroforestry systems). While tree cover loss associated 
with the *permanent agriculture*, *hard commodities*, and *settlements and infrastructure* classes represent 
a close approximation of deforestation (permanent conversion of forest to another land use), these 
classes may sometimes include the clearing of planted trees. For example, clearing and replanting an 
orchard would be included in the *permanent agriculture* class, but is not deforestation of a natural forest. 
Similarly, replacement of natural forest with wood fiber plantations is not distinguished from routine 
harvesting within existing plantations established before 2000, as these are both included in the logging 
class. 

This product shows the dominant driver in each 1km cell over the entire period. It does not show 
multiple drivers if they occur in the same cell at smaller scales, nor does it detail the sequence of 
drivers if multiple occurred at different times within the period. Additionally, these data are limited 
in scope to attributing drivers to tree cover loss as mapped by the 
[Global Forest Change v1.13](https://www.science.org/doi/10.1126/science.1244693) tree cover loss product, 
and therefore the detection of loss is subject to the accuracy of that product. 

**For a full description of the methods, technical specifications, definitions, accuracy, and 
limitations, please see the publication**: 
[https://doi.org/10.1088/1748-9326/add606](https://doi.org/10.1088/1748-9326/add606). 
The data is also available for download on [Zenodo](https://zenodo.org/records/19485190) and 
the [WRI Data Explorer](https://datasets.wri.org/datasets/dominant-drivers-of-tree-cover-loss-at-1km).

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/landandcarbon/assets/wri_gdm_drivers_forest_loss_1km/v1_3_2001_2025`
- 数据类型：影像（Image）
- 提供方：World Resources Institute、Google DeepMind、Google Earth Engine
- 时间范围：2001-01-01 至 2026-01-01
- 空间分辨率：1111.95 米
- 许可：CC-BY-4.0
- 关键词：agriculture, deforestation, forest, forest-biomass, google, landuse, wri

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Most likely class based on raw probabilities. | 1111.95 |  |
| probability_1 | Probability of "Permanent agriculture" class (scaled to [0-250]). | 1111.95 |  |
| probability_2 | Probability of "Hard commodities" class (scaled to [0-250]). | 1111.95 |  |
| probability_3 | Probability of "Shifting cultivation" class (scaled to [0-250]). | 1111.95 |  |
| probability_4 | Probability of "Logging" class (scaled to [0-250]). | 1111.95 |  |
| probability_5 | Probability of "Wildfire" class (scaled to [0-250]). | 1111.95 |  |
| probability_6 | Probability of "Settlements and infrastructure" class (scaled to [0-250]). | 1111.95 |  |
| probability_7 | Probability of "Other natural disturbances" class (scaled to [0-250]). | 1111.95 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('projects/landandcarbon/assets/wri_gdm_drivers_forest_loss_1km/v1_3_2001_2025');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_landandcarbon_assets_wri_gdm_drivers_forest_loss_1km_v1_3_2001_2025
- 数据引用：Sims, M.J., R. Stanimirova, A. Raichuk, M. Neumann, J. Richter, F. Follett, 
J. MacCarthy, K. Lister, C. Randle, L. Sloat, E. Esipova, J. Jupiter, C. Stanton, 
D. Morris, C.M. Slay, D. Purves, and N. Harris. 2025. 
“Global Drivers of Forest Loss at 1 Km Resolution.” 
Environmental Research Letters 20 (7): 074027. 
[doi:10.1088/1748-9326/add606](https://doi.org/10.1088/1748-9326/add606)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
