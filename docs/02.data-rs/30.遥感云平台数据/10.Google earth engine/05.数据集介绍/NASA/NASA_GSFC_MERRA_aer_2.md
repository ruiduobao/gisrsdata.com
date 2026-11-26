---
title: "MERRA-2 M2T1NXAER：气溶胶诊断 V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/2c0f8a49/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "atmosphere"
  - "carbon"
  - "dust"
  - "mass"
  - "merra"
  - "nasa"
  - "sea-salt"
  - "so2"
  - "so4"
---

# MERRA-2 M2T1NXAER：气溶胶诊断 V5.12.4

英文原名：MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4

## 这是什么数据

M2T1NXAER（或 tavg1_2d_aer_Nx）是现代时代回顾分析研究与应用版本 2（MERRA-2）中的每小时时间平均二维数据集合。本集合由同化的气溶胶诊断组成，如气溶胶成分（黑碳、沙尘、海盐、硫酸盐与有机碳）的柱质量密度、气溶胶成分的地表质量浓度，以及 550 nm 的总消光（与散射）气溶胶光学厚度（AOT）。总 PM1.0、PM2.5 与 PM10 可用 [FAQ](https://gmao.gsfc.nasa.gov/reanalysis/MERRA-2/FAQ/) 中描述的公式推导。

数据场以从 00:30 UTC 开始的一小时的中心时间打时间戳，例如：00:30、01:30、……、23:30 UTC。

MERRA-2 是 NASA 全球建模与同化办公室（GMAO）使用戈达德地球观测系统模式（GEOS）版本 5.12.4 生产的卫星时代全球大气再分析的最新版本。数据集覆盖 1980 年至今的时段，延迟为月末后约 3 周。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1980 年至 2026 年；分辨率：69,375 米。
- 时间范围：1980-01-01 至 2026-10-01

## 分辨率与规格

- 空间分辨率：约 69,375 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BCANGSTR | 黑碳埃格斯特朗参数 [470–870 nm]。 | 69375 |  |
| BCCMASS | 黑碳柱质量密度。 | 69375 |  |
| BCEXTTAU | 黑碳消光 AOT [550 nm]。 | 69375 |  |
| BCFLUXU | 黑碳柱 u 风质量通量。 | 69375 |  |
| BCFLUXV | 黑碳柱 v 风质量通量。 | 69375 |  |
| BCSCATAU | 黑碳散射 AOT [550 nm]。 | 69375 |  |
| BCSMASS | 黑碳地表质量浓度。 | 69375 |  |
| DMSCMASS | DMS柱质量密度。 | 69375 |  |
| DMSSMASS | DMS地表质量浓度。 | 69375 |  |
| DUANGSTR | 沙尘埃格斯特朗参数 [470–870 nm]。 | 69375 |  |
| DUCMASS25 | 沙尘柱质量密度 - PM2.5。 | 69375 |  |
| DUCMASS | 沙尘柱质量密度。 | 69375 |  |
| DUEXTT25 | 沙尘消光 AOT [550 nm] - PM2.5。 | 69375 |  |
| DUEXTTAU | 沙尘消光 AOT [550 nm]。 | 69375 |  |
| DUFLUXU | 沙尘柱 u 风质量通量。 | 69375 |  |
| DUFLUXV | 沙尘柱 v 风质量通量。 | 69375 |  |
| DUSCAT25 | 沙尘散射 AOT [550 nm] - PM2.5。 | 69375 |  |
| DUSCATAU | 沙尘散射 AOT [550 nm]。 | 69375 |  |
| DUSMASS25 | 沙尘地表质量浓度 - PM2.5。 | 69375 |  |
| DUSMASS | 沙尘地表质量浓度。 | 69375 |  |
| OCANGSTR | 有机碳埃格斯特朗参数 [470–870 nm]。 | 69375 |  |
| OCCMASS | 有机碳柱质量密度。 | 69375 |  |
| OCEXTTAU | 有机碳消光 AOT [550 nm]。 | 69375 |  |
| OCFLUXU | 有机碳柱 u 风质量通量。 | 69375 |  |
| OCFLUXV | 有机碳柱 v 风质量通量。 | 69375 |  |
| OCSCATAU | 有机碳散射 AOT [550 nm]。 | 69375 |  |
| OCSMASS | 有机碳地表质量浓度。 | 69375 |  |
| SO2CMASS | SO2柱质量密度。 | 69375 |  |
| SO2SMASS | SO2地表质量浓度。 | 69375 |  |
| SO4CMASS | SO4柱质量密度。 | 69375 |  |
| SO4SMASS | SO4地表质量浓度。 | 69375 |  |
| SSANGSTR | 海盐埃格斯特朗参数 [470–870 nm]。 | 69375 |  |
| SSCMASS25 | 海盐柱质量密度 - PM2.5。 | 69375 |  |
| SSCMASS | 海盐柱质量密度。 | 69375 |  |
| SSEXTT25 | 海盐消光 AOT [550 nm] - PM2.5。 | 69375 |  |
| SSEXTTAU | 海盐消光 AOT [550 nm]。 | 69375 |  |
| SSFLUXU | 海盐柱 u 风质量通量。 | 69375 |  |
| SSFLUXV | 海盐柱 v 风质量通量。 | 69375 |  |
| SSSCAT25 | 海盐散射 AOT [550 nm] - PM2.5。 | 69375 |  |
| SSSCATAU | 海盐散射 AOT [550 nm]。 | 69375 |  |
| SSSMASS25 | 海盐地表质量浓度 - PM2.5。 | 69375 |  |
| SSSMASS | 海盐地表质量浓度。 | 69375 |  |
| SUANGSTR | SO4埃格斯特朗参数 [470–870 nm]。 | 69375 |  |
| SUEXTTAU | SO4消光 AOT [550 nm]。 | 69375 |  |
| SUFLUXU | SO4柱 u 风质量通量。 | 69375 |  |
| SUFLUXV | SO4柱 v 风质量通量。 | 69375 |  |
| SUSCATAU | SO4散射 AOT [550 nm]。 | 69375 |  |
| TOTANGSTR | 总气溶胶埃格斯特朗参数 [470–870 nm]。 | 69375 |  |
| TOTEXTTAU | 总气溶胶消光 AOT [550 nm]。 | 69375 |  |
| TOTSCATAU | 总气溶胶散射 AOT [550 nm]。 | 69375 |  |

## 能拿来做什么

- 大气再分析与气候研究
- 气溶胶与空气质量分析
- 天气与气候建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/aer/2');
```

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/aer/2`
- 提供方：NASA/MERRA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_aer_2

## 许可与引用

- 许可：proprietary
- 关键词：aerosol, atmosphere, carbon, dust, mass, merra, nasa, sea-salt, so2, so4
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4](/pages/a20ec4cb/)
- [MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4](/pages/201faee8/)
- [MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4](/pages/36298a6b/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
