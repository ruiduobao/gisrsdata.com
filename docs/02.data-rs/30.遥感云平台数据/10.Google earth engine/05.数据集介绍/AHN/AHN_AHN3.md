---
title: "荷兰高程数据 AHN3（0.5 米，含 DSM 与 DTM）"
date: 2026-11-03 12:00:00
permalink: /pages/9769c309/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ahn"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "lidar"
  - "netherlands"
---

# 荷兰高程数据 AHN3（0.5 米，含 DSM 与 DTM）

英文原名：AHN3: Netherlands AHN 0.5m

## 这是什么数据

AHN（荷兰全国高程库）是覆盖荷兰全境的精细高程数据集：用直升机和飞机搭载激光设备测量，垂直精度达到 5 厘米。

AHN3 包含 2014–2019 年的两个变量：DSM 和 DTM。DTM 是地面本身的高程（数字地形模型）；DSM 是每个位置最高表面的高程（数字表面模型，含屋顶、树冠等）。

## 覆盖范围与时间

- 覆盖范围：荷兰全国
- 时间范围：2014-01-01 至 2019-01-01

## 分辨率与规格

- 空间分辨率：约 0.5 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dtm | 地面高程 | 0.5 |  |
| dsm | 该点最高表面的高程 | 0.5 |  |

## 能拿来做什么

- 高精度地形、水文与洪水风险分析
- 对比 DSM 与 DTM 估算建筑和植被高度
- 城市规划与基础设施设计的高程底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('AHN/AHN3');
```

- 数据集编号（Earth Engine ID）：`AHN/AHN3`
- 提供方：AHN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN3

## 许可与引用

- 许可：CC0-1.0
- 关键词：ahn, dem, elevation, elevation-topography, geophysical, lidar, netherlands
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [SRTM 高程数据第 4 版（填洞版）](/pages/81d193ff/)
- [哥白尼全球 30 米高程模型 GLO-30（2024_1）](/pages/3bdccac6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
