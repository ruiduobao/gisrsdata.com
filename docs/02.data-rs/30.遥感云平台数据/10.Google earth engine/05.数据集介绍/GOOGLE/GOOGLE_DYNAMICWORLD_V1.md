---
title: "Dynamic World V1（动态世界）"
date: 2026-11-03 12:00:00
permalink: /pages/a78539ca/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "google"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "nrt"
  - "sentinel2-derived"
---

# Dynamic World V1（动态世界）

英文原名：Dynamic World V1

## 这是什么数据

Dynamic World 是一个 10 米近实时（NRT）土地利用/土地覆盖（LULC）数据集，包含九个类别的类别概率和标签信息。

Dynamic World 预测可用于 2015-06-27 至今的 Sentinel-2 L1C 集合。Sentinel-2 的重访频率因纬度而异，为 2–5 天。Dynamic World 预测针对 CLOUDY_PIXEL_PERCENTAGE <= 35% 的 Sentinel-2 L1C 影像生成。预测结果结合 S2 云概率、云位移指数和方向距离变换进行了掩膜，以去除云和云影。

Dynamic World 集合中的影像名称与生成它们的单个 Sentinel-2 L1C 资产名称相匹配，例如：

ee.Image('COPERNICUS/S2/20160711T084022_20160711T084751_T35PKT')

有一景相匹配的 Dynamic World 影像，名为：ee.Image('GOOGLE/DYNAMICWORLD/V1/20160711T084022_20160711T084751_T35PKT')。

除「label」波段外的所有概率波段总和为 1。

要了解 Dynamic World 数据集的更多信息并查看生成合成影像、计算区域统计和处理时间序列的示例，见 [Dynamic World 简介](https://developers.google.com/earth-engine/tutorials/community/introduction-to-dynamic-world-pt-1) 教程系列。

由于 Dynamic World 的类别估算源自使用小移动窗口空间上下文的单景影像，对于部分由时间覆盖定义的预测土地覆盖（如作物），在缺乏明显区分特征时，其 top-1「概率」可能相对较低。干旱气候下的高反射地表、沙地、太阳耀光等也可能出现这种现象。

要只选择确信属于某个 Dynamic World 类别的像元，建议通过对 top-1 预测的估计「概率」设置阈值来掩膜 Dynamic World 输出。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2015-06-27 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water | 被水体完全覆盖的估计概率 | 10 |  |
| trees | 被树木完全覆盖的估计概率 | 10 |  |
| grass | 被草地完全覆盖的估计概率 | 10 |  |
| flooded_vegetation | 被淹没植被完全覆盖的估计概率 | 10 |  |
| crops | 被作物完全覆盖的估计概率 | 10 |  |
| shrub_and_scrub | 被灌木和灌丛完全覆盖的估计概率 | 10 |  |
| built | 被建成区完全覆盖的估计概率 | 10 |  |
| bare | 被裸地完全覆盖的估计概率 | 10 |  |
| snow_and_ice | 被冰雪完全覆盖的估计概率 | 10 |  |
| label | 估计概率最高的波段的索引 | 10 |  |

## 能拿来做什么

- 近实时土地覆盖制图
- 土地利用变化监测
- 生态系统与城市扩张分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1');
```

- 数据集编号（Earth Engine ID）：`GOOGLE/DYNAMICWORLD/V1`
- 提供方：World Resources Institute、Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_DYNAMICWORLD_V1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：global, google, landcover, landuse, landuse-landcover, nrt, sentinel2-derived
- 数据引用：Brown, C.F., Brumby, S.P., Guzder-Williams, B. et al. Dynamic World, Near
real-time global 10 m land use land cover mapping. Sci Data 9, 251 (2022).
[doi:10.1038/s41597-022-01307-4](https://doi.org/10.1038/s41597-022-01307-4)

- DOI：10.1038/s41597-022-01307-4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)
- [ESA WorldCereal 活跃耕地 10 米 v100](/pages/dd6f101f/)
- [ESA WorldCover 10 米 v100（2020）](/pages/69070083/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
