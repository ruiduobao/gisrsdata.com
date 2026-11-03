---
title: "SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2"
date: 2026-11-03 12:00:00
permalink: /pages/03c0c2c1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "canada"
  - "forest"
  - "forest-biomass"
  - "tree-cover"
---

# SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2

## 数据集简介

This data publication contains a set of 30m resolution raster files representing 2020
Canadian wall-to-wall maps of broad land cover type, forest canopy height, degree of
crown closure and aboveground tree biomass, along with species composition of several
major tree species. The Spatialized CAnadian National Forest Inventory data product (SCANFI)
was developed using the newly updated National Forest Inventory photo-plot dataset, which
consists of a regular sample grid of photo-interpreted high-resolution imagery covering all
of Canada’s non-arctic landmass. SCANFI was produced using temporally harmonized summer and
winter Landsat spectral imagery along with hundreds of tile-level regional models based on
a novel k-nearest neighbours and random forest imputation method.

A full description of all methods and validation analyses can be found in [Guindon et al. (2024)](https://doi.org/10.1139/cjfr-2023-0118).
As the Arctic ecozones are outside NFI’s covered areas, the vegetation attributes in these
regions were predicted using a single random forest model. The vegetation attributes in these
arctic areas could not be rigorously validated. The "articExtrapolationArea" band identifies these zones.

Data limitations:

1. The spectral disturbances of some areas disturbed by pests are not comprehensively represented in the
training set, thus making it impossible to predict all defoliation cases. One such area, severely impacted by
the recent eastern spruce budworm outbreak, is located on the North Shore of the St-Lawrence River. These
forests are misrepresented in our training data, there is therefore an imprecision in the estimates.

2. Attributes of open stand classes, namely shrub, herbs, rock and bryoid, are more difficult to estimate
through the photointerpretation of aerial images. Therefore, these estimates could be less reliable than the
forest attribute estimates.

3. As reported in the [manuscript](https://doi.org/10.1139/cjfr-2023-0118), the uncertainty of tree species cover predictions is relatively high. This
is particularly true for less abundant tree species, such as ponderosa pine and tamarack. The tree species
layers are therefore suitable for regional and coarser scale studies. Also, the broadleaf proportion are
slightly underestimated in this product version.

4. Our validation indicates that the areas in Yukon exhibit a notably lower R2 value. Consequently, estimates
within these regions are less dependable.

5. Urban areas and roads are classified as rock, according to the 2020 Agriculture and Agri-Food Canada
land-use classification map. Even though those areas contain mostly buildings and infrastructure, they may
also contain trees. Forested urban parks are usually classified as forested areas. Vegetation attributes are
also predicted for forested areas in agricultural regions.

This dataset can also be downloaded from Canada's ["Open Government"](https://doi.org/10.23687/18e6a919-53fd-41ce-b4e2-44a9707c52dc) website.

Contains information licensed under the
[Open Government Licence - Canada](https://open.canada.ca/en/open-government-licence-canada)

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/gcpm041u-lemur/assets/scanfi_v12/SCANFI_v1_2`
- 数据类型：影像（Image）
- 提供方：NRCan、Google Earth Engine
- 时间范围：2020-01-01 至 2021-01-01
- 空间分辨率：30 米
- 许可：OGL-Canada-2.0
- 关键词：canada, forest, forest-biomass, tree-cover

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| biomass | Aboveground tree biomass: biomass derived from total merchantable volume estimates produced by provincial agencies | 30 |  |
| closure | Crown closure (%): percentage of pixel covered by the tree canopy | 30 |  |
| height | Height (meters): vegetation height | 30 |  |
| nfiLandCover | NFI land cover class values: Land cover classes include Bryoid (1), Herbs (2), Rock (3), Shrub (4),                         Treed broadleaf (5), Treed conifer (6), Treed mixed (7) and  Water (8) | 30 |  |
| balsamFir | Balsam fir (%): estimated as the proportion of the canopy covered by Abies balsamea | 30 |  |
| blackSpruce | Black spruce (%): estimated as the proportion of the canopy covered by Picea mariana | 30 |  |
| douglasFir | Douglas fir (%): estimated as the proportion of the canopy covered by Pseudotsuga menziesii | 30 |  |
| jackPine | Jack pine (%): estimated as the proportion of the canopy covered by Pinus banksiana | 30 |  |
| lodgepolePine | Lodgepole pine (%): estimated as the proportion of the canopy covered by Pinus contorta | 30 |  |
| ponderosaPine | Ponderosa pine (%): estimated as the proportion of the canopy covered by Pinus ponderosa | 30 |  |
| prcB | Broadleaf tree cover in percentage (PrcB) | 30 |  |
| prcC | Other coniferous tree cover in percentage (PrcC) | 30 |  |
| tamarack | Tamarack_tree (%): estimated as the proportion of the canopy covered by Larix laricina | 30 |  |
| whiteRedPine | White and red pine (%): estimated as the proportion of the canopy covered by Pinus strobus and Pinus resinosa | 30 |  |
| articExtrapolationArea | Flag for marking Arctic unreliable extrapolated pixels | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('projects/gcpm041u-lemur/assets/scanfi_v12/SCANFI_v1_2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_gcpm041u-lemur_assets_scanfi_v12_SCANFI_v1_2
- 数据引用：Guindon L., Villemaire P., Correia D.L.P., Manka F., Lacarte S., Smiley B. 2023.
SCANFI: Spatialized CAnadian National Forest Inventory data product.
Natural Resources Canada, Canadian Forest Service, Laurentian Forestry Centre, Quebec, Canada.
[https://doi.org/10.23687/18e6a919-53fd-41ce-b4e2-44a9707c52dc](https://doi.org/10.23687/18e6a919-53fd-41ce-b4e2-44a9707c52dc)

Guindon, L., Manka, F., Correia, D.L.P., Villemaire, P., Smiley, B., Bernier, P., Gauthier, S., Beaudoin, A., Boucher, J., and Boulanger, Y. 2024.
A new approach for Spatializing the Canadian National Forest Inventory (SCANFI) using Landsat dense time series. Can. J. For. Res.
[https://doi.org/10.1139/cjfr-2023-0118](https://doi.org/10.1139/cjfr-2023-0118)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
