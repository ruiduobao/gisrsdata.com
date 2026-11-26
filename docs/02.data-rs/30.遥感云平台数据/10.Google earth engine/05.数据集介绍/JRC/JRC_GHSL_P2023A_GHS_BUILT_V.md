---
title: "GHSL：全球建筑体积 1975–2030（P2023A）"
date: 2026-11-03 12:00:00
permalink: /pages/a37f30e2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "building"
  - "built-environment"
  - "copernicus"
  - "dem"
  - "ghsl"
  - "jrc"
  - "population"
  - "sdg"
  - "sentinel2-derived"
  - "srtm"
  - "urban"
---

# GHSL：全球建筑体积 1975–2030（P2023A）

英文原名：GHSL: Global building volume 1975-2030 (P2023A)

## 这是什么数据

这一栅格数据集描绘全球建筑体积分布，以每 100 米格网单元的立方米数表示。该数据集测量建筑总体积以及分配给以非居住（NRES）用途为主的格网单元的建筑体积。估算基于[建成区表面](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S)与[建筑高度](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_H)产品。

有关 GHSL 数据产品的更多信息，见 [GHSL Data Package 2023 报告](https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：1975–2030 年；分辨率：100 米。
- 时间范围：1975-01-01 至 2030-12-31

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built_volume_total | 每个格网单元的建筑总体积。 | 100 |  |
| built_volume_nres | 每个格网单元的非居住建筑体积。 | 100 |  |

## 能拿来做什么

- 城市扩张与建成区变化分析
- 人口暴露与灾害风险评估
- 可持续发展目标（SDG 11）监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_V');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_BUILT_V`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_V

## 许可与引用

- 许可：proprietary
- 关键词：alos, building, built-environment, copernicus, dem, ghsl, jrc, population, sdg, sentinel2-derived, srtm, urban
- DOI：10.2905/AB2F107A-03CD-47A3-85E5-139D8EC63283

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Global building height 2018 (P2023A)](/pages/13e5cfe4/)
- [ALOS 全球 30 米 DSM v4.1](/pages/774620fb/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
