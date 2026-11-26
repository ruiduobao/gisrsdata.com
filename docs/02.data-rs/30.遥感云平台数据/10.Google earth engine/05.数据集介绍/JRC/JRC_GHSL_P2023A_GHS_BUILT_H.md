---
title: "GHSL：全球建筑高度 2018（P2023A）"
date: 2026-11-03 12:00:00
permalink: /pages/13e5cfe4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "building"
  - "built"
  - "built-environment"
  - "builtup"
  - "copernicus"
  - "dem"
  - "ghsl"
  - "height"
  - "jrc"
  - "population"
  - "sdg"
---

# GHSL：全球建筑高度 2018（P2023A）

英文原名：GHSL: Global building height 2018 (P2023A)

## 这是什么数据

这一空间栅格数据集以 100 米分辨率描绘 2018 年全球建筑高度分布。用于预测建筑高度的输入数据是 ALOS 全球数字地表模型（30 米）、NASA 航天飞机雷达地形测绘任务数据（30 米），以及由 2017–2018 年 L1C 数据制作的全球 Sentinel-2 影像合成。

有关 GHSL 数据产品的更多信息，见 [GHSL Data Package 2023 报告](https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)，其中建筑高度图层称为平均净建筑高度（ANBH）。

全球人类住区层（GHSL）项目由欧洲委员会、联合研究中心以及区域与城市政策总司支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间：2018 年；分辨率：100 米。
- 时间范围：2018-01-01 至 2018-12-31

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built_height | 每个格网单元的平均建筑高度。 | 100 |  |

## 能拿来做什么

- 城市扩张与建成区变化分析
- 人口暴露与灾害风险评估
- 可持续发展目标（SDG 11）监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_H');
```

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_BUILT_H`
- 提供方：EC JRC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_H

## 许可与引用

- 许可：proprietary
- 关键词：alos, building, built, built-environment, builtup, copernicus, dem, ghsl, height, jrc, population, sdg, sentinel2-derived, srtm, urban
- DOI：10.2905/85005901-3A49-48DD-9D19-6261354F56FE

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL: Global building volume 1975-2030 (P2023A)](/pages/a37f30e2/)
- [ALOS 全球 30 米 DSM v4.1](/pages/774620fb/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
