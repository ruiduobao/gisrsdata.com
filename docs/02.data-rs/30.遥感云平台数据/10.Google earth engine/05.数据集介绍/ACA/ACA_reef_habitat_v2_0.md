---
title: "Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0"
date: 2026-11-03 12:00:00
permalink: /pages/8d9d570d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "coral"
  - "oceans"
  - "planet-derived"
  - "reef"
  - "seagrass"
  - "sentinel2-derived"
---

# Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0

## 数据集简介

The [Allen Coral Atlas](https://allencoralatlas.org/) dataset maps the geomorphic
zonation and benthic habitat for the world's shallow coral reefs at 5 m pixel
resolution. Also included is a global reef extent product that maps additional
reef areas unable to be explicitly included in the geomorphic and benthic mapping.
The underlying satellite image data are temporal composites of [PlanetScope
satellite](https://www.planet.com/products/basemap/) imagery spanning 2018-2020.
The habitat maps are created via a machine learning approach with contextual
editing, using a range of imagery, bathymetry and derived products as input data,
trained via a globally consistent reference data set. A full description of the
methods and approaches can be found in the methods section of the [Allen Coral
Atlas website](https://allencoralatlas.org/methods/).

The first version
([v1.0](https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v1_0))
of the Allen Coral Atlas was completed in Q4 2021, and this new version (v2.0) has
a wide range of improvements across the globe that incorporated both user feedback
on v1.0 and new technical developments in mapping methodology. A brief overview of
the changes can be found
[here](https://allencoralatlas.org/blog/geomorphic-and-benthic-maps-2022-update/)
and a more comprehensive technical summary can be found
[here](https://storage.googleapis.com/coral-atlas-static-files/resources-page-materials/Allen_Coral_Atlas_2022_habitat_map_revisions.pdf).

The Allen Coral Atlas was funded by [Vulcan Inc.](https://vulcan.com/) and is
managed by the [Arizona State University Center for Global Discovery and
Conservation Science](https://gdcs.asu.edu/). Partners include
[Planet](https://www.planet.com/), the
[University of Queensland](https://www.uq.edu.au/), and the
[Coral Reef Alliance](https://coral.org/en/).

Scientific background publications:

- Lyons, M. B., Roelfsema, C. M., Kennedy, E. V., Kovacs, E. M., Borrego-Acevedo, R., Markey, K., ... & Murray, N. J. (2020). Mapping the world's coral reefs using a global multiscale earth observation framework. Remote Sensing in Ecology and Conservation, 6(4), 557-568. [doi:10.1002/rse2.157](https://doi.org/10.1002/rse2.157)

- Kennedy, E. V., Roelfsema, C. M., Lyons, M. B., Kovacs, E. M., Borrego-Acevedo, R., Roe, M., ... & Tudman, P. (2021). Reef Cover, a coral reef classification for global habitat mapping from remote sensing. Scientific Data, 8(1), 1-20. [doi:10.1038/s41597-021-00958-z](https://doi.org/10.1038/s41597-021-00958-z)

- Roelfsema, C. M., Lyons, M., Murray, N., Kovacs, E. M., Kennedy, E., Markey, K., ... & Phinn, S. R. (2021). Workflow for the generation of expert-derived training and validation data: a view to global scale habitat mapping. Frontiers in Marine Science.  [doi:10.3389/fmars.2021.643381](https://doi.org/10.3389/fmars.2021.643381)

- Li, J., Knapp, D. E., Lyons, M., Roelfsema, C., Phinn, S., Schill, S. R., & Asner, G. P. (2021). Automated global shallow water bathymetry mapping using Google Earth Engine. Remote Sensing, 13(8), 1469. [doi:10.3390/rs13081469](https://doi.org/10.3390/rs13081469)

- Li, J., Knapp, D. E., Fabina, N. S., Kennedy, E. V., Larsen, K., Lyons, M. B., ... & Asner, G. P. (2020). A global coral reef probability map generated using convolutional neural networks. Coral Reefs, 39(6), 1805-1815. [doi:10.1007/s00338-020-02005-6](https://doi.org/10.1007/s00338-020-02005-6)

Allen Coral Atlas maps, bathymetry and map statistics are &copy; 2023 Allen
Coral Atlas Partnership and Vulcan, Inc.

## 基本信息

- 数据集编号（Earth Engine ID）：`ACA/reef_habitat/v2_0`
- 数据类型：影像（Image）
- 提供方：Allen Coral Atlas Partnership (ACA)、Google Earth Engine、University of Queensland (UQ)、Arizona State University Center for Global Discovery and Conservation Science (ASU GDCS)、Coral Reef Alliance (CORAL)、Planet、Vulcan Inc. (Vulcan)、Google Earth Engine
- 时间范围：2018-01-01 至 2021-01-01
- 空间分辨率：5 米
- 许可：CC-BY-4.0
- 关键词：coral, oceans, planet-derived, reef, seagrass, sentinel2-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| geomorphic | Classification of geomorphic zonation. | 5 |  |
| benthic | Classification of dominant benthic composition. | 5 |  |
| reef_mask | Globally standardised reef extent product that integrates a number of global reef classification and bahtymetry products ("Reef Extent" on the Atlas portal).  | 5 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('ACA/reef_habitat/v2_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0
- 数据引用：Allen Coral Atlas (2020). Imagery, maps and monitoring of the world's tropical coral reefs. Zenodo. [doi:10.5281/zenodo.3833242](https://doi.org/10.5281/zenodo.3833242)

- DOI：10.5281/zenodo.3833242

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
