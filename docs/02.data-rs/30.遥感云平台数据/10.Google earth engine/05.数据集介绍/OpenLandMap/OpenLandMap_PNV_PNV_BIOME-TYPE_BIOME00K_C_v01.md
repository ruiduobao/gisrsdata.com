---
title: "OpenLandMap 生物群系潜在分布"
date: 2026-11-03 12:00:00
permalink: /pages/edd16381/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biome"
  - "ecosystems"
  - "envirometrix"
  - "opengeohub"
  - "openlandmap"
  - "potential"
---

# OpenLandMap 生物群系潜在分布

英文原名：OpenLandMap Potential Distribution of Biomes

## 这是什么数据

潜在自然植被生物群系的全球类别预测（基于使用 BIOME 6000 数据集「当前生物群系」类别的预测）。

潜在自然植被（PNV）是与气候平衡、若不受人类活动影响时在给定地点会存在的植被覆盖。PNV 有助于提高公众对土地退化的认识并估算土地潜力。本数据集包含以下预测结果：（1）基于 BIOME 6000 数据集（8,057 个现代花粉基站点重建）的生物群系全球分布；（2）基于详细出现记录（1,546,435 个地面观测）的欧洲森林树种分布；（3）全球逐月光合有效辐射吸收分量（FAPAR）值（30,301 个随机采样点）。

报告数据问题或伪影请使用 [此链接](https://github.com/envirometrix/PNVmaps/issues)。

要在 Earth Engine 之外访问与可视化地图，使用 [此页面](https://opengeohub.org/about-openlandmap)。

如果您发现 LandGIS 地图中的错误、伪影或不一致，或有问题，请使用以下渠道：

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2001 年至 2002 年（预测参考期）；分辨率：1,000 米。
- 时间范围：2001-01-01 至 2002-01-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| biome_type | 生物群系的潜在分布 | 1000 |  |

## 能拿来做什么

- 作为全球气候与土地系统分析的基础图层。
- 为生态、水文与土壤建模提供环境变量。
- 与其他全球格网产品做对比与融合。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01');
```

- 数据集编号（Earth Engine ID）：`OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01`
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_PNV_PNV_BIOME-TYPE_BIOME00K_C_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 许可与引用

- 许可：CC-BY-SA-4.0
- 关键词：biome, ecosystems, envirometrix, opengeohub, openlandmap, potential
- 数据引用：Hengl T, Walsh MG, Sanderman J, Wheeler I, Harrison SP, Prentice IC. (2018) Global Mapping of Potential Natural Vegetation: An Assessment of Machine Learning Algorithms for Estimating Land Potential. PeerJ Preprints.
[10.7287/peerj.preprints.26811v1](https://doi.org/10.7910/DVN/QQHCIK)

- DOI：10.7910/DVN/QQHCIK

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenLandMap Potential FAPAR Monthly](/pages/284f7bab/)
- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
