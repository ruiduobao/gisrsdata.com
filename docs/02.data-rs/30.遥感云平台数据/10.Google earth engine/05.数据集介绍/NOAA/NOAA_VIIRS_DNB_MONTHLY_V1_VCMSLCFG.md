---
title: "VIIRS 杂散光校正夜间日/夜波段合成第 1 版（月度）"
date: 2026-11-03 12:00:00
permalink: /pages/b0f1292c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dnb"
  - "eog"
  - "lights"
  - "monthly"
  - "nighttime"
  - "noaa"
  - "population"
  - "stray-light"
  - "viirs"
  - "visible"
---

# VIIRS 杂散光校正夜间日/夜波段合成第 1 版（月度）

英文原名：VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1

## 这是什么数据

使用可见红外成像辐射计套件（VIIRS）日/夜波段（DNB）夜间数据制作的月平均辐射合成影像。

由于这些数据按月合成，全球许多区域在该月无法获得高质量数据覆盖。原因可能是云覆盖（尤其热带地区），或太阳照射（如两极各自夏季月份）。因此建议数据用户利用「cf_cvg」波段，不要假定平均辐射影像中值为零即意味着未观测到灯光。

云覆盖用 VIIRS 云掩膜产品（VCM）确定。此外，条带边缘附近的数据不纳入合成（聚合区 29–32）。第 1 版尚未过滤极光、火灾、船只与其他瞬时灯光。此分离正在开发中，将纳入该时间序列的后续版本。将灯光与背景（非灯光）值分离的方法也在开发中。

本产品是 VIIRS DNB 的另一种配置，采用校正杂散光的程序。校正程序将可见区域向两极方向扩展，并改善动态范围。需要注意，该程序在晨昏区域会引入一些伪影；详情见 [参考论文](https://spie.org/Publications/Proceedings/Paper/10.1117/12.2023107)。本产品排除受云覆盖影响的数据。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2014 年至今（逐月）；分辨率：463.83 米。
- 时间范围：2014-01-01 至 2026-09-01

## 分辨率与规格

- 空间分辨率：约 463.83 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| avg_rad | DNB 辐射平均值。 | 463.83 |  |
| cf_cvg | 无云覆盖：进入每个像元的观测总数。此波段可用于识别观测数少、质量降低的区域。 | 463.83 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG');
```

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG`
- 提供方：Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_MONTHLY_V1_VCMSLCFG

## 许可与引用

- 许可：proprietary
- 关键词：dnb, eog, lights, monthly, nighttime, noaa, population, stray-light, viirs, visible
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [VIIRS 夜间日/夜波段合成第 1 版（月度）](/pages/331f49de/)
- [VIIRS 夜间日/夜波段年度合成 V2.1](/pages/98ca1d9b/)
- [VIIRS 夜间日/夜波段年度合成 V2.2](/pages/57765f1c/)
- [VNP46A2：VIIRS 月光间隙填充 BRDF 夜间灯光逐日 L3 全球 500 米 [已弃用]](/pages/877e12fd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
