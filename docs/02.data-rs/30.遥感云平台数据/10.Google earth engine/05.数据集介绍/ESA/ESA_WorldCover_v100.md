---
title: "ESA WorldCover 10 米 v100（2020）"
date: 2026-11-03 12:00:00
permalink: /pages/69070083/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "esa"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "sentinel1-derived"
  - "sentinel2-derived"
---

# ESA WorldCover 10 米 v100（2020）

英文原名：ESA WorldCover 10m v100

## 这是什么数据

欧洲空间局（ESA）WorldCover 10 米 2020 产品基于 Sentinel-1 与 Sentinel-2 数据，提供 2020 年 10 米分辨率的全球土地覆盖图。WorldCover 产品包含 11 个土地覆盖类别，在 ESA WorldCover 项目框架下生成，该项目是欧洲空间局第五个对地观测包络计划（EOEP-5）的一部分。

另见：

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2020-01-01 至 2021-01-01

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Map | 土地覆盖类别 | 10 |  |

## 能拿来做什么

- 全球土地覆盖制图
- 土地利用变化分析
- 环境与生态评估底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('ESA/WorldCover/v100');
```

- 数据集编号（Earth Engine ID）：`ESA/WorldCover/v100`
- 提供方：ESA WorldCover Consortium、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCover_v100
* [ESA WorldCover website](https://esa-worldcover.org)
* [User Manual and Validation Report](https://esa-worldcover.org/en/data-access)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：esa, landcover, landuse, landuse-landcover, sentinel1-derived, sentinel2-derived
- 数据引用：Zanaga, D., Van De Kerchove, R., De Keersmaecker, W., Souverijns, N.,
Brockmann, C., Quast, R., Wevers, J., Grosu, A., Paccini, A., Vergnaud, S.,
Cartus, O., Santoro, M., Fritz, S., Georgieva, I., Lesiv, M., Carter, S.,
Herold, M., Li, Linlin, Tsendbazar, N.E., Ramoino, F., Arino, O., 2021.
ESA WorldCover 10 m 2020 v100.
([doi:10.5281/zenodo.5571936](https://doi.org/10.5281/zenodo.5571936))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ESA WorldCover 10m v200](/pages/08a038e5/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [世界居住区足迹 2015（WSF 2015）](/pages/a545a891/)
- [全球油棕分布与种植年份（1990–2021）v1.2](/pages/36b9933f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
