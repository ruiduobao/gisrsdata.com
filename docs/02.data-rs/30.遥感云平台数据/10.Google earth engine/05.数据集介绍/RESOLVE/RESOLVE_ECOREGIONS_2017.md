---
title: "RESOLVE 生态区 2017"
date: 2026-11-03 12:00:00
permalink: /pages/ff7bd76a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biodiversity"
  - "conservation"
  - "ecoregions"
  - "ecosystems"
  - "global"
  - "habitats"
  - "protection"
  - "resolve"
  - "table"
---

# RESOLVE 生态区 2017

英文原名：RESOLVE Ecoregions 2017

## 这是什么数据

RESOLVE 生态区数据集于 2017 年更新，描绘了代表我们 living planet 的 846 个陆地生态区。在 [https://ecoregions2017.appspot.com/](https://ecoregions2017.appspot.com/) 或 [Earth Engine](https://code.earthengine.google.com/b961ab2adfcb03c920aab63d86c49eb2) 查看风格化地图。

用最简单的定义，生态区是区域尺度的生态系统。具体而言，生态区代表生物多样性的独特组合——所有类群，不只是植被——其边界包括维持生态过程所需的空间。生态区为保护规划提供了有用的底图，特别是因为它们采用自然边界而非政治边界，在生物群系内定义独特的生物地理组合与生态栖息地，并协助表征地球的生物多样性。

本数据集基于生物地理学——研究动植物分布的科学——的最新进展。原始生态区数据集自 2001 年推出以来被广泛使用，支撑了从生态学家对全球气候变化对自然影响的最新分析、世界甲虫的分布到现代保护规划。

846 个陆地生态区被归入 14 个生物群系与 8 个界。其中六个生物群系是森林生物群系，其余八个是非森林生物群系。对于森林生物群系，生态区的地理边界（Dinerstein 等，2017）与保护区（UNEP-WCMC 2016）与 2000 至 2015 年的全球森林变化数据（Hansen 等 2013）相交，以计算保护区内栖息地百分比与保护区外剩余栖息地百分比。同样，非森林生态区与保护区（UNEP-WCMC 2016）的边界与 2000 年人为生物群系数据（Anthromes v2）（Ellis 等，2010）相交，以识别保护区内外剩余的栖息地。每个生态区有唯一 ID、面积（平方度）与 NNH（自然需要一半）类别 1–4。NNH 类别基于保护区内栖息地百分比与保护区外剩余栖息地百分比。

1. 已保护一半：生态区总面积的 50% 以上已被保护。2. 自然可达一半：生态区总面积中受保护的不足 50%，但剩余未保护自然栖息地的数量若将新保护区加入系统，可使保护超过 50%。3. 自然可恢复：剩余的受保护与未保护自然栖息地总量不足 50% 但超过 20%。此类别的生态区需要恢复才能达到已保护一半。4. 自然危急：剩余的受保护与未保护自然栖息地总量不超过 20%。短期内不可能实现保护一半，努力应集中于保护剩余的原生栖息地碎片。

更新的生态区 2017 是每个陆地生态区剩余栖息地的最新数据集（截至 2018 年 2 月）。它发布是为了描绘实现 [自然需要一半](https://natureneedshalf.org/) 这一远见目标——保护地球一半土地以拯救 living 陆地生物圈——的进展。

注——一些生态区是非常复杂的多边形，有超过一百万个顶点，如岩石与冰。这类生态区在必要时被拆分，Eco_ID 等属性得到保留。若想查看所有被拆分的生态区，请 [运行此脚本](https://code.earthengine.google.com/7a437c78fc8cb46ec586bb4e2c10e526)。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2017 年；类型：矢量/表格。
- 时间范围：2017-04-05 至 2017-04-05

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| BIOME_NAME | STRING | 生物群系名称 |
| BIOME_NUM | DOUBLE | 生物群系编号 |
| COLOR | STRING | 颜色 |
| COLOR_BIO | STRING | 生物群系颜色 |
| COLOR_NNH | STRING | NNH 颜色 |
| ECO_ID | DOUBLE | 生态区唯一 ID |
| ECO_NAME | STRING | 生态区名称 |
| LICENSE | STRING | CC-BY 4.0 |
| NNH | DOUBLE | NNH 类别（1–4），基于保护区内栖息地百分比与保护区外剩余栖息地百分比 |
| NNH_NAME | STRING | 已保护一半、自然可达一半、自然可恢复或自然危急 |
| OBJECTID | DOUBLE | 对象 ID |
| REALM | STRING | 界名称 |
| SHAPE_AREA | DOUBLE | 生态区多边形面积（平方度） |
| SHAPE_LENG | DOUBLE | 生态区多边形周长（度） |

## 能拿来做什么

- 做保护规划与保护区网络设计。
- 评估各生态区的保护进展（NNH 类别）。
- 作为生物多样性分析的区域单元。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('RESOLVE/ECOREGIONS/2017');
```

- 数据集编号（Earth Engine ID）：`RESOLVE/ECOREGIONS/2017`
- 提供方：RESOLVE Biodiversity and Wildlife Solutions、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：biodiversity, conservation, ecoregions, ecosystems, global, habitats, protection, resolve, table
- 数据引用：[Bioscience, An Ecoregions-Based Approach to Protecting Half the
Terrestrial Realm](https://academic.oup.com/bioscience/article/67/6/534/3102935)
[doi:10.1093/biosci/bix014](https://doi.org/10.1093/biosci/bix014)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
