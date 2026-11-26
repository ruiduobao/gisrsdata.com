---
title: "MYD21A1N.061 Aqua 地表温度与三波段发射率日产品全球 1 公里"
date: 2026-11-03 12:00:00
permalink: /pages/5d8990fc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "emissivity"
  - "global"
  - "lst"
  - "nasa"
  - "surface-temperature"
  - "usgs"
  - "weather-and-climate"
---

# MYD21A1N.061 Aqua 地表温度与三波段发射率日产品全球 1 公里

英文原名：MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km

## 这是什么数据

MYD21A1N 数据集每日由夜间二级格网（L2G）中间 LST 产品以 1,000 米空间分辨率生产。L2G 过程将每日 MOD21 条带颗粒映射到正弦 MODIS 格网，并存储给定日在格网单元上的所有观测。MOD21A1 算法为每个单元筛选这些观测，并将最终 LST 值估计为所有无云且 LST&E 精度良好的观测的平均值。夜间平均值按该单元的观测覆盖加权。只有观测覆盖大于 15% 阈值的观测被考虑。MYD21A1N 产品包含计算的 LST 以及质量控制、三个发射率波段、观测天顶角与观测时间。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2026 年；分辨率：1 公里。
- 时间范围：2000-02-24 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_1KM | 地表温度。 | 1000 |  |
| QC | 质量控制。 | 1000 |  |
| Emis_29 | 波段 29 发射率。 | 1000 |  |
| Emis_31 | 波段 31 发射率。 | 1000 |  |
| Emis_32 | 波段 32 发射率。 | 1000 |  |
| View_Angle | MODIS 观测天顶角。 | 1000 |  |
| View_Time | MODIS 观测时间。 | 1000 |  |

## 能拿来做什么

- 地表温度监测
- 城市热岛与气候研究
- 干旱与蒸散评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MYD21A1N');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD21A1N`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD21A1N
* [User's Guide](https://lpdaac.usgs.gov/documents/1398/MOD21_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1399/MOD21_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD21A1N)

## 许可与引用

- 许可：proprietary
- 关键词：aqua, daily, emissivity, global, lst, nasa, surface-temperature, usgs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD21A1N.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km](/pages/a130c488/)
- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/ea336063/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
