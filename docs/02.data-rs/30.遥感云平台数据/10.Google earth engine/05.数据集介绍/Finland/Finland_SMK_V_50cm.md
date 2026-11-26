---
title: "芬兰 RGB NLS 正射影像 50 厘米（SMK 提供）"
date: 2026-11-03 12:00:00
permalink: /pages/9ac43642/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "finland"
  - "orthophotos"
  - "rgb"
  - "smk"
---

# 芬兰 RGB NLS 正射影像 50 厘米（SMK 提供）

英文原名：Finland RGB NLS orthophotos 50 cm by SMK

## 这是什么数据

NLS 正射影像是覆盖芬兰全境的航空照片数据集。本数据由 SMK（[能源局](https://energiavirasto.fi/etusivu)，原缩写为 SMK）提供。正射影像由多张单独的航空照片组合而成。正射影像格式的航空照片数据集以最新数据集形式提供，由可得的最新航空照片组成。最新数据通常为 1–3 年前。NLS 正射影像每 3 年更新一次（拉普兰北部为 12 年）。

（在数据集编号中，V 代表「väri」，意为「彩色」，以区别于「假彩色」）更多信息见 [NLS 正射影像文档](https://www.maanmittauslaitos.fi/en/maps-and-spatial-data/expert-users/product-descriptions/orthophotos)。

## 覆盖范围与时间

- 覆盖范围：芬兰全境
- 时间范围：2015-01-01 至 2023-01-01

## 分辨率与规格

- 空间分辨率：约 0.5 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | 红 | 0.5 |  |
| G | 绿 | 0.5 |  |
| B | 蓝 | 0.5 |  |

## 能拿来做什么

- 高分辨率航空影像底图
- 土地利用与林业制图
- 影像判读与变化检测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Finland/SMK/V/50cm');
```

- 数据集编号（Earth Engine ID）：`Finland/SMK/V/50cm`
- 提供方：NLS orthophotos、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Finland_SMK_V_50cm

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：finland, orthophotos, rgb, smk
- 数据引用：The National Land Survey of Finland

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Finland NRG NLS orthophotos 50 cm by SMK](/pages/f4209a99/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Landsat 8 二级地表反射率与地表温度数据](/pages/778e3960/)
- [协调版哨兵-2 MSI 一级 C 大气顶反射率](/pages/07bc7cbd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
