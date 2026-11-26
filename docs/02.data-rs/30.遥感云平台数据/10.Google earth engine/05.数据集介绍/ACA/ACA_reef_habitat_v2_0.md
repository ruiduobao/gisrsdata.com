---
title: "全球珊瑚礁生境图（Allen Coral Atlas，v2.0）"
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

# 全球珊瑚礁生境图（Allen Coral Atlas，v2.0）

英文原名：Allen Coral Atlas (ACA) - Geomorphic Zonation and Benthic Habitat - v2.0

## 这是什么数据

这是 [Allen Coral Atlas](https://allencoralatlas.org/) 绘制的全球浅海珊瑚礁地图，分辨率 5 米一格，给出礁体地貌分区和底质生境两类信息，外加一层「礁体范围」产品，补上无法明确纳入地貌与生境制图的额外礁区。底图来自 [PlanetScope 卫星](https://www.planet.com/products/basemap/) 2018–2020 年的合成影像；地图用机器学习加人工校订生成，输入包括影像、水深等多种数据，训练样本全球统一。方法细节见 [Allen Coral Atlas 网站的方法页](https://allencoralatlas.org/methods/)。

第一版（[v1.0](https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v1_0)）于 2021 年第四季度完成；v2.0 结合 v1.0 的用户反馈与制图方法的新进展做了全球范围的修订，改动概要见[这篇博客](https://allencoralatlas.org/blog/geomorphic-and-benthic-maps-2022-update/)，完整技术汇总见[这份 PDF](https://storage.googleapis.com/coral-atlas-static-files/resources-page-materials/Allen_Coral_Atlas_2022_habitat_map_revisions.pdf)。

该项目由 [Vulcan Inc.](https://vulcan.com/) 出资、[亚利桑那州立大学全球发现与保护科学中心](https://gdcs.asu.edu/) 管理，合作方包括 [Planet](https://www.planet.com/)、[昆士兰大学](https://www.uq.edu.au/) 和 [珊瑚礁联盟（CORAL）](https://coral.org/en/)。

相关论文：Lyons 等（2020）[doi:10.1002/rse2.157](https://doi.org/10.1002/rse2.157)；Kennedy 等（2021）[doi:10.1038/s41597-021-00958-z](https://doi.org/10.1038/s41597-021-00958-z)；Roelfsema 等（2021）[doi:10.3389/fmars.2021.643381](https://doi.org/10.3389/fmars.2021.643381)；Li 等（2021）[doi:10.3390/rs13081469](https://doi.org/10.3390/rs13081469)；Li 等（2020）[doi:10.1007/s00338-020-02005-6](https://doi.org/10.1007/s00338-020-02005-6)。地图、水深与统计数据 © 2023 Allen Coral Atlas Partnership 与 Vulcan, Inc.

## 覆盖范围与时间

- 覆盖范围：全球浅海珊瑚礁
- 时间范围：2018-01-01 至 2021-01-01

## 分辨率与规格

- 空间分辨率：约 5 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| geomorphic | 地貌分区分类 | 5 |  |
| benthic | 主要底质组成分类 | 5 |  |
| reef_mask | 全球统一礁体范围产品：融合多套全球礁体分类与水深产品（即门户站上的 Reef Extent） | 5 |  |

## 能拿来做什么

- 摸清全球珊瑚礁的分布与面积，做礁区保护规划
- 分析礁体地貌分区与底质生境的组成
- 给海洋保护区选划与全球礁体统计提供统一底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('ACA/reef_habitat/v2_0');
```

- 数据集编号（Earth Engine ID）：`ACA/reef_habitat/v2_0`
- 提供方：Allen Coral Atlas Partnership (ACA)、Google Earth Engine、University of Queensland (UQ)、Arizona State University Center for Global Discovery and Conservation Science (ASU GDCS)、Coral Reef Alliance (CORAL)、Planet、Vulcan Inc. (Vulcan)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ACA_reef_habitat_v2_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：coral, oceans, planet-derived, reef, seagrass, sentinel2-derived
- 数据引用：Allen Coral Atlas (2020). Imagery, maps and monitoring of the world's tropical coral reefs. Zenodo. [doi:10.5281/zenodo.3833242](https://doi.org/10.5281/zenodo.3833242)

- DOI：10.5281/zenodo.3833242

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球珊瑚礁生境图（Allen Coral Atlas，v1.0，已弃用）](/pages/9999a17e/)
- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
