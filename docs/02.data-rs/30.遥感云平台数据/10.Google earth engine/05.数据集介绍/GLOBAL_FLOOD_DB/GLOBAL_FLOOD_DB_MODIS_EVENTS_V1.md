---
title: "全球洪水数据库 v1（2000–2018）"
date: 2026-11-03 12:00:00
permalink: /pages/e042bdf5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2s"
  - "cloudtostreet"
  - "dartmouth"
  - "dfo"
  - "flood"
  - "gfd"
  - "inundation"
  - "surface"
  - "surface-ground-water"
  - "water"
---

# 全球洪水数据库 v1（2000–2018）

英文原名：Global Flood Database v1 (2000-2018)

## 这是什么数据

全球洪水数据库包含 2000–2018 年间发生的 913 次洪水事件的范围与时间分布图。更多信息见[相关期刊论文](https://doi.org/10.1038/s41586-021-03695-w)。

洪水事件收集自[达特茅斯洪水观测站](https://floodobservatory.colorado.edu/)，并据此收集 MODIS 影像。选定的 913 次事件是那些使用 Terra 和 Aqua MODIS 传感器的 12,719 景影像成功制图的事件（通过了质量控制，具有超出永久水体的显著淹没）。在每个洪水事件的完整日期范围内，每个像元以 250 米分辨率被分类为水体或非水体，并生成后续数据产品，包括最大洪水范围（「flooded」波段）和淹没持续天数（「duration」波段）。洪水事件期间的水体与非水体分类包括永久水体（此处将表示永久水体的 30 米 [JRC 全球地表水数据集](https://global-surface-water.appspot.com/) 重采样至 250 米分辨率），可使用「jrc_perm_water」波段将其掩膜掉以分离洪水水体。还添加了额外的数据质量波段，表示洪水事件期间的云况（例如「clear_views」表示在事件起止日期之间观测到洪水的晴空天数，「clear_perc」表示晴空观测天数占事件总持续天数的百分比）。

影像集合中的每景影像表示一次单独洪水的地图。该集合可按日期、国家或达特茅斯洪水观测站原始 ID 筛选。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-02-17 至 2018-12-10

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| flooded | 事件期间洪水的最大范围。* 1——地表水面积 * 0——无水 | 30 |  |
| duration | 事件期间地表水的持续时间（天）。像元值表示像元面积在事件期间被视为水体的合成天数。使用了 3 天 MODIS 合成。 | 30 |  |
| clear_views | 每个事件起止日之间的无云观测天数。云覆盖由 MODIS 质量保证波段（「state_1km」）确定。 | 30 |  |
| clear_perc | 给定洪水事件期间晴空观测的百分比。它等同于「clear_views」波段，但按每次洪水事件的 MODIS 影像数量归一化。云覆盖由 MODIS 质量保证波段（「state_1km」）确定。 | 30 |  |
| jrc_perm_water | 由 JRC 全球地表水数据集使用「transition」波段确定的永久水体。分辨率保持 JRC 数据集原始的 30 米分辨率。* 1——永久水体 * 0——非水体。 | 30 |  |

## 能拿来做什么

- 全球洪水范围与暴露人口分析
- 洪水风险制图
- 灾害应急与保险风险评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GLOBAL_FLOOD_DB/MODIS_EVENTS/V1');
```

- 数据集编号（Earth Engine ID）：`GLOBAL_FLOOD_DB/MODIS_EVENTS/V1`
- 提供方：Cloud to Street (C2S) / Dartmouth Flood Observatory (DFO)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GLOBAL_FLOOD_DB_MODIS_EVENTS_V1

## 许可与引用

- 许可：CC-BY-NC-4.0
- 关键词：c2s, cloudtostreet, dartmouth, dfo, flood, gfd, inundation, surface, surface-ground-water, water
- 数据引用：Tellman, B., J.A. Sullivan, C. Kuhn, A.J. Kettner, C.S. Doyle, G.R.
Brakenridge, T. Erickson, D.A. Slayback. (Accepted.)
Satellites observe increasing proportion of population exposed
to floods. Nature.
[doi:10.1038/s41586-021-03695-w](https://doi.org/10.1038/s41586-021-03695-w)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [全球网格人口 GPWv4.11：水体掩膜](/pages/d70c6d97/)
- [全球网格人口 GPWv4.11：水域面积](/pages/0f13e587/)
- [美国 BLM 土地健康野外样地数据（AIM TerrADat）](/pages/53c74382/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
