---
title: "MCD19A2.006 Terra 与 Aqua MAIAC 陆地气溶胶光学厚度日产品 1 公里（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/2dcc3bae/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aod"
  - "aqua"
  - "atmosphere"
  - "daily"
  - "global"
  - "maiac"
  - "mcd19a2"
  - "modis"
  - "nasa"
  - "terra"
  - "usgs"
---

# MCD19A2.006 Terra 与 Aqua MAIAC 陆地气溶胶光学厚度日产品 1 公里（已弃用）

英文原名：MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km [deprecated]

## 这是什么数据

MCD19A2 V6 数据产品是一个 MODIS Terra 与 Aqua 组合的多角度大气校正实现（MAIAC）陆地气溶胶光学厚度（AOD）格网二级产品，每日以 1 公里分辨率生产。更多信息见 [MAIAC 用户指南](https://lpdaac.usgs.gov/documents/110/MCD19_User_Guide_V6.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2023 年；分辨率：1 公里。
- 时间范围：2000-02-26 至 2023-02-17

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Optical_Depth_047 | 陆地上蓝波段（0.47 µm）气溶胶光学厚度。 | 1000 |  |
| Optical_Depth_055 | 陆地上绿波段（0.55 µm）气溶胶光学厚度。 | 1000 |  |
| AOD_Uncertainty | 基于蓝波段地表亮度（反射率）的 AOD 不确定性。 | 1000 |  |
| FineModeFraction | 海洋细模态比例。 | 1000 |  |
| Column_WV | 陆地上的柱水汽。 | 1000 |  |
| AOD_QA | AOD QA。 | 1000 |  |
| AOD_MODEL | 反演中使用的 AOD 模型。 | 1000 |  |
| Injection_Height | 烟注入高度。 | 1000 |  |
| cosSZA | 太阳天顶角余弦（5 公里分辨率）。 | 1000 |  |
| cosVZA | 观测天顶角余弦（5 公里分辨率）。 | 1000 |  |
| RelAZ | 相对方位角（5 公里分辨率）。 | 1000 |  |
| Scattering_Angle | 散射角（5 公里分辨率）。 | 1000 |  |
| Glint_Angle | 耀斑角（5 公里分辨率）。 | 1000 |  |

## 能拿来做什么

- 气溶胶与空气质量监测
- 大气校正辅助
- 气候研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/006/MCD19A2_GRANULES');
```

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD19A2_GRANULES`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD19A2_GRANULES
* [User's Guide](https://lpdaac.usgs.gov/documents/110/MCD19_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/111/MCD19_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD19A2)

## 许可与引用

- 许可：proprietary
- 关键词：aerosol, aod, aqua, atmosphere, daily, global, maiac, mcd19a2, modis, nasa, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD08_M3.006 Terra Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]](/pages/93d0522c/)
- [MYD08_M3.006 Aqua Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]](/pages/6fa8c555/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
