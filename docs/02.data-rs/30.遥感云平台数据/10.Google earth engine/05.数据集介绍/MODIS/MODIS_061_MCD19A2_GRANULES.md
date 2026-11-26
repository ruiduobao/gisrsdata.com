---
title: "MCD19A2.061 Terra 与 Aqua MAIAC 陆地气溶胶光学厚度日产品 1 公里"
date: 2026-11-03 12:00:00
permalink: /pages/93a4fc40/
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

# MCD19A2.061 Terra 与 Aqua MAIAC 陆地气溶胶光学厚度日产品 1 公里

英文原名：MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km

## 这是什么数据

MCD19A2 V6.1 数据产品是一个 MODIS Terra 与 Aqua 组合的多角度大气校正实现（MAIAC）陆地气溶胶光学厚度（AOD）格网二级产品，每日以 1 公里分辨率生产。更多信息见 [MAIAC 用户指南](https://lpdaac.usgs.gov/documents/1500/MCD19_User_Guide_V61.pdf)。

注：本产品发布时附带说明，整个任务的重处理预计持续到 2023 年夏季。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2026 年；分辨率：1 公里。
- 时间范围：2000-02-24 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Optical_Depth_047 | 在 MODIS 蓝波段（0.47 µm）反演的陆地气溶胶光学厚度。在高海拔（大于 4.2 公里）不提供 AOD，除非检测到烟或尘；此时报告用于大气校正的静态值 0.02。 | 1000 |  |
| Optical_Depth_055 | 在 MODIS 绿波段（0.55 µm）反演的陆地气溶胶光学厚度。 | 1000 |  |
| AOD_Uncertainty | 基于蓝波段地表亮度（反射率）的 AOD 不确定性。 | 1000 |  |
| FineModeFraction | 海洋与大型内陆湖泊的细模态比例。 | 1000 |  |
| Column_WV | 陆地上的柱水汽，从 MODIS 0.94 µm 近红外波段反演。当针对多云像元报告时，它代表云上方的水汽。 | 1000 |  |
| AOD_QA | AOD QA。 | 1000 |  |
| Injection_Height | 烟注入高度。 | 1000 |  |
| AngstromExp_470-780 | 海洋上 470–780nm 的 Angstrom 指数。 | 1000 |  |
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
var dataset = ee.ImageCollection('MODIS/061/MCD19A2_GRANULES');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD19A2_GRANULES`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD19A2_GRANULES

## 许可与引用

- 许可：proprietary
- 关键词：aerosol, aod, aqua, atmosphere, daily, global, maiac, mcd19a2, modis, nasa, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD08_M3.061 Terra Atmosphere Monthly Global Product](/pages/492818e5/)
- [MYD08_M3.061 Aqua Atmosphere Monthly Global Product](/pages/515181f9/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
