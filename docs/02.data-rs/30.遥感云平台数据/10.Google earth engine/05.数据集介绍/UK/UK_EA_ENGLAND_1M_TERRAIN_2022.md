---
title: "英格兰 1 米合成 DTM/DSM（环境署）"
date: 2026-11-03 12:00:00
permalink: /pages/365d0f47/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "lidar"
---

# 英格兰 1 米合成 DTM/DSM（环境署）

英文原名：England 1m Composite DTM/DSM (Environment Agency)

## 这是什么数据

LIDAR 合成 DTM/DSM 是覆盖英格兰约 99% 的栅格地形模型，空间分辨率 1 米，由英国环境署于 2022 年生产。该模型包含 3 个波段的地形数据：数字地形模型（DTM）、首次回波数字地表模型（DSM）与末次回波 DSM。

DTM 由返回传感器的末次或唯一激光脉冲生产。使用定制算法与人工编辑从 DSM 中移除地表物体，生成仅地表的 terrain 模型。DTM 源自 EA 带时间戳档案与国家 LIDAR 计划调查的组合，经合并与重采样以获得最佳覆盖。重复调查处使用最新、分辨率最好的数据。重采样处在合并前使用双线性插值。2022 年 LIDAR 合成包含 2000 年 6 月 6 日至 2022 年 4 月 2 日之间执行的调查。

首次回波 DSM 由返回传感器的首次或唯一激光脉冲生产，包括车辆、建筑与植被等物体的高度，以及首次或唯一回波为地面处的地形表面。首次回波 DSM 源自 2016 年 11 月 11 日至 2022 年 5 月 5 日之间作为国家 LIDAR 计划一部分采集的数据。该计划将英格兰划分为约 300 个区块，自 2016 年起在连续冬季调查。这些调查合并起来，使用沿重叠区的羽化技术创建首次回波 LIDAR 合成，以消除调查间高程的微小差异。请参阅数据提供方的元数据索引目录，其显示每个位置在 LIDAR 合成生产中使用了哪次调查。首次回波 DSM 的覆盖与范围将与末次回波 DSM 不一致，因为末次回波 DSM 合成由国家 LIDAR 计划与时间序列调查共同生产。

末次回波 DSM 由返回传感器的末次或唯一激光脉冲生产，包括车辆、建筑与植被等物体的高度以及地形表面。末次回波 DTM（原文如此）源自 EA 带时间戳档案与国家 LIDAR 计划调查的组合，经合并与重采样以获得最佳覆盖。重复调查处使用最新、分辨率最好的数据。重采样处在合并前使用双线性插值。2022 年 LIDAR 合成包含 2000 年 6 月 6 日至 2022 年 4 月 2 日之间执行的调查。请参阅数据提供方的元数据索引目录，其显示每个位置在 LIDAR 合成生产中使用了哪次调查。

数据对齐到 OS 国家格网，以米呈现，参考 Ordnance Survey Newlyn 并使用 OSTN15 转换方法。进入合成生产的所有单次 LIDAR 调查的垂直精度为 +/-15 厘米均方根误差。

## 覆盖范围与时间

- 覆盖范围：空间：英格兰（约 99%）；时间：2000 年至 2022 年调查合成；分辨率：1 米。
- 时间范围：2000-06-06 至 2022-04-02

## 分辨率与规格

- 空间分辨率：约 1 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dtm | 数字地形模型 | 1 |  |
| dsm_first | 首次回波数字地表模型 | 1 |  |
| dsm_last | 末次回波数字地表模型 | 1 |  |

## 能拿来做什么

- 做英格兰高精度地形与洪水建模。
- 提取建筑与植被高度。
- 为工程与规划提供 1 米高程底图。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('UK/EA/ENGLAND_1M_TERRAIN/2022');
```

- 数据集编号（Earth Engine ID）：`UK/EA/ENGLAND_1M_TERRAIN/2022`
- 提供方：UK Environment Agency、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UK_EA_ENGLAND_1M_TERRAIN_2022

## 许可与引用

- 许可：proprietary
- 关键词：dem, elevation, elevation-topography, lidar
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS 全球 30 米 DSM v4.1](/pages/774620fb/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [GHSL：全球建筑体积 1975–2030（P2023A）](/pages/a37f30e2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
