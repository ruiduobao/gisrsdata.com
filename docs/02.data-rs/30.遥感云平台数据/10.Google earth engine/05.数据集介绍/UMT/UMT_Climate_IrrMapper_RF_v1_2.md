---
title: "IrrMapper Irrigated Lands, Version 1.2"
date: 2026-11-03 12:00:00
permalink: /pages/9b77de6e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "landsat-derived"
---

# IrrMapper Irrigated Lands, Version 1.2

## 数据集简介

IrrMapper is an annual classification of irrigation status in the 11
Western United States made at Landsat scale (i.e., 30 m) using the
Random Forest algorithm, covering years 1986 - present.

While the [IrrMapper paper](https://www.mdpi.com/2072-4292/12/14/2328)
describes classification of four classes (i.e., irrigated, dryland,
uncultivated, wetland), the dataset is converted to a binary
classification of irrigated and non-irrigated.

'Irrigated' refers to the detection of any irrigation during the year.
The IrrMapper random forest model was trained using an extensive
geospatial database of land cover from each of four irrigated- and
non-irrigated classes, including over 50,000 human-verified irrigated
fields, 38,000 dryland fields, and over 500,000 square kilometers of
uncultivated lands.

For version 1.2, the original training data was greatly expanded,
a RF model built for each state, and a more thorough validation and uncertainty
analysis undertaken. See the [supplement](https://static-content.springer.com/esm/art%3A10.1038%2Fs43247-023-01152-2/MediaObjects/43247_2023_1152_MOESM3_ESM.docx)
to our [paper](https://www.nature.com/articles/s43247-023-01152-2) on the impacts of irrigation on streamflow.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMT/Climate/IrrMapper_RF/v1_2`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of Montana / Montana Climate Office、Google Earth Engine
- 时间范围：1986-01-01 至 2025-01-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：agriculture, landsat-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Irrigated pixels have the value of 1, the other pixels are masked out. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UMT/Climate/IrrMapper_RF/v1_2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMT_Climate_IrrMapper_RF_v1_2
- 数据引用：
Ketchum, D.; Jencso, K.; Maneta, M.P.; Melton, F.; Jones, M.O.; Huntington, J.
IrrMapper: A Machine Learning Approach for High Resolution Mapping of
Irrigated Agriculture Across the Western U.S.,
Remote Sens. 2020, 12, 2328. [doi:10.3390/rs12142328](https://doi.org/10.3390/rs12142328)

Ketchum, D., Hoylman, Z.H., Huntington, J. et al. Irrigation intensification impacts sustainability
of streamflow in the Western United States. Commun Earth Environ 4, 479 (2023). [doi:10.1038/s43247-023-01152-2](https://doi.org/10.1038/s43247-023-01152-2)



> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
