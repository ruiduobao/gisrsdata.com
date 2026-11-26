---
title: "全球局地气候区地图最新版"
date: 2026-11-03 12:00:00
permalink: /pages/65860dab/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "landcover"
  - "landuse-landcover"
  - "urban"
---

# 全球局地气候区地图最新版

英文原名：Global map of Local Climate Zones, latest version

## 这是什么数据

自 2012 年推出以来，局地气候区（LCZ）已成为表征城市景观的新标准，提供考虑微尺度土地覆盖及相关物理性质的整体分类方法。

这幅全球局地气候区地图，像元大小 100 米、代表名义年份 2018，源自多个地球观测数据集与专家 LCZ 类别标签。LCZ_Filter 是推荐大多数用户使用的波段。另一个分类波段 LCZ 仅因其用于计算 LCZ_Probability 波段而提供。

LCZ 体系以其对城市与乡村景观类型的关注补充其他土地利用/土地覆盖体系，这些类型可用 LCZ 体系的 17 个类别中的任何一个描述。17 个 LCZ 类别中，10 个反映「建成」环境，每个 LCZ 类型都关联着对模拟城市化大气响应至关重要的关键城市冠层参数的通用数值描述。此外，由于 LCZ 最初是作为城市热岛研究的新框架设计的，它们还包含一小套（7 个）「自然」土地覆盖类别，可用作「对照」或「自然参考」区域。

由于 LCZ 体系中的这七个自然类别无法捕捉世界现有自然生态系统的异质性，我们建议用户——如需要——将建成 LCZ 类别与任何提供更广泛自然土地覆盖类别的其他土地覆盖产品结合使用。

另见：

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2018 年（名义年份）；分辨率：100 米。
- 时间范围：2018-01-01 至 2019-01-01

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LCZ | 原始的、基于像元的带 LCZ 类别的全球 LCZ 地图 | 100 |  |
| LCZ_Filter | 推荐的带 LCZ 类别的全球 LCZ 地图。LCZ 标签在应用 Demuzere 等（2020）描述的形态学高斯滤波后获得 | 100 |  |
| LCZ_Probability | 概率层，标明每个像元选择众数 LCZ 的频率（例如 60% 的概率意味着众数 LCZ 类别在 50 个 LCZ 模型中被制图 30 次）。这是由 LCZ 层派生的基于像元的概率 | 100 |  |

## 能拿来做什么

- 做城市热岛与城市气候研究。
- 为城市规划提供统一的景观分类。
- 作为城市冠层参数化的基础数据。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('RUB/RUBCLIM/LCZ/global_lcz_map/latest');
```

- 数据集编号（Earth Engine ID）：`RUB/RUBCLIM/LCZ/global_lcz_map/latest`
- 提供方：Bochum Urban Climate Lab、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/RUB_RUBCLIM_LCZ_global_lcz_map_latest
* [LCZ Typology](https://doi.org/10.1175/BAMS-D-11-00019.1)
* [Global map of LCZs - paper](https://doi.org/10.5194/essd-14-3835-2022)
* [Global map of LCZs - dataset](https://doi.org/10.5281/zenodo.6364593)
* [LCZ Gaussian filtering](https://doi.org/10.1038/s41597-020-00605-z)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：climate, landcover, landuse-landcover, urban
- 数据引用：Demuzere M.; Kittner J.; Martilli A.; Mills, G.; Moede, C.; Stewart, I.D.; van Vliet, J.; Bechtel, B.
A global map of local climate zones to support earth system modelling and urban-scale environmental science.
Earth System Science Data 2022, 14 Volume 8: 3835-3873.
[doi:10.5194/essd-14-3835-2022](https://doi.org/10.5194/essd-14-3835-2022)

- DOI：10.5281/zenodo.6364593

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Global map of Local Climate Zones, v1 [deprecated]](/pages/e08624ce/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
