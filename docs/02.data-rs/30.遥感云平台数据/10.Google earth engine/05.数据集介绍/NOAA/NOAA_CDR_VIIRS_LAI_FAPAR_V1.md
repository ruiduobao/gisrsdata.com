---
title: "NOAA CDR VIIRS LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 1"
date: 2026-11-03 12:00:00
permalink: /pages/8b7e1f94/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cdr"
  - "daily"
  - "fapar"
  - "lai"
  - "land"
  - "noaa"
  - "plant-productivity"
  - "viirs"
---

# NOAA CDR VIIRS LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 1

英文原名：NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1

## 这是什么数据

本气候数据记录（CDR）结合了叶面积指数（LAI）与吸收光合有效辐射分数（FAPAR）数据集，这两个生物物理变量可用于评估植被胁迫、预测农业产量及其他建模与资源管理应用。LAI 跟踪单位地面表面积的单侧绿叶面积，FAPAR 量化植物在光合有效辐射（PAR）光谱区内吸收的太阳辐射。LAI/FAPAR CDR 在 0.05° by 0.05° 格网上生成逐日产品。数据从 2014 年起由可见光红外成像辐射计套件（VIIRS）传感器生成。

本数据集的已知问题包括：

- TIMEOFDAY 变量包含过大 1 天的值

- 纬度值未正确关联到格网单元中心，误差 < 0.002 度

- 经度值未正确关联到格网单元中心，误差 < 0.02 度

见[数据提供方的技术说明](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Leaf_Area_Index_and_FAPAR/VIIRS/AlgorithmDescriptionVIIRS_01B-20c.pdf)。

提供方注：N-19（最后一颗搭载 AVHRR 传感器的 NOAA 卫星）的轨道漂移开始严重降低反演产品质量。因此，VIIRS 现在是 2014 年至今这些产品使用的主要传感器。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：2014 年至 2026 年；分辨率：5,566 米。
- 时间范围：2014-01-01 至 2026-10-29

## 分辨率与规格

- 空间分辨率：约 5,566 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LAI | 叶面积指数。 | 5566 |  |
| FAPAR | 吸收光合有效辐射的分数。 | 5566 |  |
| QA | 质量控制位标志。 | 5566 |  |

## 能拿来做什么

- 气候数据记录应用
- 植被长期变化监测
- 气候变化研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/VIIRS/LAI_FAPAR/V1');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/VIIRS/LAI_FAPAR/V1`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_VIIRS_LAI_FAPAR_V1

## 许可与引用

- 许可：proprietary
- 关键词：cdr, daily, fapar, lai, land, noaa, plant-productivity, viirs
- 数据引用：Cite as: Claverie, Martin; Vermote, Eric; Justice, Chris; Csiszar, Ivan;
Myneni, Ranga; Baret, Frederic; Masuoka, Ed; Wolfe, Robert; Ray, James P.;
NOAA CDR Program. (2023): NOAA Climate Data Record (CDR) of VIIRS Leaf Area
Index (LAI) and Fraction of Absorbed Photosynthetically Active Radiation
(FAPAR), Version 1. [indicate subset used]. NOAA National Centers for
Environmental Information. [https://doi.org/10.25921/9x3m-0e02](https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ncdc:C01706/html).

- DOI：10.25921/9x3m-0e02

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR AVHRR LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 5](/pages/27c7ed95/)
- [NOAA CDR AVHRR NDVI：归一化差值植被指数，版本 5](/pages/a0ccef04/)
- [NOAA CDR VIIRS NDVI：归一化差值植被指数，版本 1](/pages/ea9a554f/)
- [NOAA CDR AVHRR LAI FAPAR：叶面积指数与吸收光合有效辐射分数，版本 4 [已弃用]](/pages/18fe53c5/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
