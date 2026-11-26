---
title: "MCD19A1.061 陆地表面 BRF 日 L2G 全球 500 米与 1 公里"
date: 2026-11-03 12:00:00
permalink: /pages/18647d64/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aod"
  - "aqua"
  - "daily"
  - "global"
  - "maiac"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "terra"
  - "usgs"
---

# MCD19A1.061 陆地表面 BRF 日 L2G 全球 500 米与 1 公里

英文原名：MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km

## 这是什么数据

MCD19A1 版本 6.1 数据产品是一个中分辨率成像光谱仪（MODIS）Terra 与 Aqua 组合的陆地表面双向反射因子（BRF）格网二级产品，每日以 500 米与 1 公里分辨率生产。更多信息见 [MAIAC 用户指南](https://lpdaac.usgs.gov/documents/1500/MCD19_User_Guide_V61.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2000 年至 2026 年；分辨率：500 米与 1 公里。
- 时间范围：2000-12-21 至 2026-10-29

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Sur_refl1 | 波段 1 在 500 米的地表反射率。 | 1000 |  |
| Sur_refl2 | 波段 2 在 500 米的地表反射率。 | 1000 |  |
| Sur_refl3 | 波段 3 在 500 米的地表反射率。 | 1000 |  |
| Sur_refl4 | 波段 4 在 500 米的地表反射率。 | 1000 |  |
| Sur_refl5 | 波段 5 在 500 米的地表反射率。 | 1000 |  |
| Sur_refl6 | 波段 6 在 500 米的地表反射率。 | 1000 |  |
| Sur_refl7 | 波段 7 在 500 米的地表反射率。 | 1000 |  |
| Sur_refl8 | 波段 8 在 1 公里的地表反射率。 | 1000 |  |
| Sur_refl9 | 波段 9 在 1 公里的地表反射率。 | 1000 |  |
| Sur_refl10 | 波段 10 在 1 公里的地表反射率。 | 1000 |  |
| Sur_refl11 | 波段 11 在 1 公里的地表反射率。 | 1000 |  |
| Sur_refl12 | 波段 12 在 1 公里的地表反射率。 | 1000 |  |
| Sigma_BRFn1 | 波段 1 在 1 公里的 BRFn 随时间不确定性。 | 1000 |  |
| Sigma_BRFn2 | 波段 2 在 1 公里的 BRFn 随时间不确定性。 | 1000 |  |
| Status_QA | QA 比特。 | 1000 |  |
| cosSZA | 太阳天顶角余弦（5 公里分辨率）。 | 1000 |  |
| cosVZA | 观测天顶角余弦（5 公里分辨率）。 | 1000 |  |
| RelAZ | 相对方位角（5 公里分辨率）。 | 1000 |  |
| Scattering_Angle | 散射角（5 公里分辨率）。 | 1000 |  |
| SAZ | 太阳方位角（5 公里分辨率）。 | 1000 |  |
| VAZ | 观测方位角（5 公里分辨率）。 | 1000 |  |
| Glint_Angle | 耀斑角（5 公里分辨率）。 | 1000 |  |
| Fv | RTLS 体积核（5 公里分辨率）。 | 1000 |  |
| Fg | RTLS 几何核（5 公里分辨率）。 | 1000 |  |

## 能拿来做什么

- 地表反射率与 BRF 分析
- MAIAC 气溶胶反演辅助
- 辐射传输研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MCD19A1_GRANULES');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD19A1_GRANULES`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD19A1_GRANULES

## 许可与引用

- 许可：proprietary
- 关键词：aerosol, aod, aqua, daily, global, maiac, modis, nasa, satellite-imagery, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A3.061 MODIS Albedo Daily 500m](/pages/80cc401f/)
- [MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m](/pages/f2dfffb1/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
