---
title: "MOD09A1.005 地表反射率 8 天全球 500 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/283afd8e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "global"
  - "mod09a1"
  - "modis"
  - "satellite-imagery"
  - "surface-reflectance"
  - "terra"
---

# MOD09A1.005 地表反射率 8 天全球 500 米 [已弃用]

英文原名：MOD09A1.005 Surface Reflectance 8-Day Global 500m [deprecated]

## 这是什么数据

MODIS 地表反射率产品提供地表光谱反射率的估计，如同在没有大气散射或吸收的情况下在地面测量的那样。低级数据已对大气气体与气溶胶做了校正，为若干更高阶的格网二级（L2G）与三级产品提供二级基础。

MOD09A1 在正弦投影的 8 天格网三级产品中以 500 米分辨率提供波段 1–7。每个 MOD09A1 像元包含 8 天时段内基于高观测覆盖、低视角、无云或云影与气溶胶负荷选择的最佳 L2G 观测。本产品提供的科学数据集包括波段 1–7 的反射率值、质量评估、该像元的年积日以及太阳、观测与天顶角。

请访问 [LP DAAC「引用我们的数据」页面](https://lpdaac.usgs.gov/citing_our_data) 了解引用 LP DAAC 数据集的信息。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2017 年；分辨率：500 米。
- 时间范围：2000-02-18 至 2017-03-22

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sur_refl_b01 | 波段 1 的地表反射率。 | 500 | 620-670nm |
| sur_refl_b02 | 波段 2 的地表反射率。 | 500 | 841-876nm |
| sur_refl_b03 | 波段 3 的地表反射率。 | 500 | 459-479nm |
| sur_refl_b04 | 波段 4 的地表反射率。 | 500 | 545-565nm |
| sur_refl_b05 | 波段 5 的地表反射率。 | 500 | 1230-1250nm |
| sur_refl_b06 | 波段 6 的地表反射率。 | 500 | 1628-1652nm |
| sur_refl_b07 | 波段 7 的地表反射率。 | 500 | 2105-2155nm |
| QA | 地表反射率 500 米波段质量控制标志。 | 500 |  |
| SolarZenith | MODIS 太阳天顶角。 | 500 |  |
| ViewZenith | MODIS 观测天顶角。 | 500 |  |
| RelativeAzimuth | MODIS 相对方位角。 | 500 |  |
| StateQA | 地表反射率 500 米状态标志。 | 500 |  |
| DayOfYear | 该像元的年内儒略日。 | 500 |  |

## 能拿来做什么

- 地表反射率与土地覆盖分析
- 植被与物候监测
- 大气校正研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MOD09A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/MOD09A1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09A1

## 许可与引用

- 许可：proprietary
- 关键词：8-day, global, mod09a1, modis, satellite-imagery, surface-reflectance, terra
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
