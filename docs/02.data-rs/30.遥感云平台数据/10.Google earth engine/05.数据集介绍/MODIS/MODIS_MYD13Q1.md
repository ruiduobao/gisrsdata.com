---
title: "MYD13Q1.005 植被指数 16 天全球 250 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/36d993d6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "aqua"
  - "evi"
  - "global"
  - "modis"
  - "myd13q1"
  - "ndvi"
  - "vegetation"
  - "vegetation-indices"
---

# MYD13Q1.005 植被指数 16 天全球 250 米 [已弃用]

英文原名：MYD13Q1.005 Vegetation Indices 16-Day Global 250m [deprecated]

## 这是什么数据

MODIS 归一化差值植被指数（NDVI）补充 NOAA 高级甚高分辨率辐射计（AVHRR）NDVI 产品，为时间序列历史应用提供连续性。MODIS 还包括一个新的增强植被指数（EVI），它最小化冠层背景变异并在茂密植被条件下保持灵敏度。EVI 还使用蓝波段去除由烟与亚像元薄云引起的残余大气污染。MODIS NDVI 与 EVI 产品由大气校正的双向地表反射率计算，并已对水、云、重气溶胶与云影做了掩膜。

MOD13AQ1 包含以下层：

- NDVI：归一化差值植被指数，比例 0.0001 - EVI：增强植被指数，比例 0.0001 - DetailedQA：VI 质量，见 MOD13Q1 VI 质量 - sur_refl_b01：红地表反射率，比例 0.0001 - sur_refl_b02：近红外地表反射率，比例 0.0001 - sur_refl_b03：蓝地表反射率，比例 0.0001 - sur_refl_b07：中红外地表反射率，比例 0.0001 - ViewZenith：观测天顶角，比例 0.01 - SolarZenith：太阳天顶角，比例 0.01 - RelativeAzimuth：相对方位角，比例 0.1 - DayOfYear：年积日 - SummaryQA：像元可靠性汇总 QA - −1 填充/无数据：未处理 - 0 好数据：可放心使用 - 1 边缘数据：有用但查看详细 QA 获取更多信息 - 2 雪/冰：像元被雪/冰覆盖 - 3：多云：像元多云

MOD13Q1 IV 质量

- 比特 0-1：MODLAND_QA - 00（0）：已生产 VI，质量良好 - 01（1）：已生产 VI，检查其他 QA - 10（2）：已生产像元，可能多云 - 11（3）：因其他原因（非云）未生产像元 - 比特 2-5：VI 有用性 - 0000（0）：最高质量 - 0001（1）：较低质量 - 0010（2）：质量递减 - 0100（4）：质量递减 - 1000（8）：质量递减 - 1001（9）：质量递减 - 1010（10）：质量递减 - 1100（12）：最低质量 - 1101（13）：质量太低以致无用 - 1110（14）：L1B 数据有误 - 1111（15）：因任何其他原因无用/未处理 - 比特 6-7：气溶胶量 - 00（0）：气候学 - 01（1）：低 - 10（2）：平均 - 11（3）：高 - 比特 8：检测到相邻云 - 0：否 - 1：是 - 比特 9：已执行大气 BRDF 校正 - 0：否 - 1：是 - 比特 10：混合云 - 0：否 - 1：是 - 比特 11-13：陆地/水体标志 - 000（0）：浅海 - 001（1）：陆地 - 010（2）：海洋海岸线与湖岸线 - 011（3）：浅内陆水体 - 100（4）：临时水体 - 101（5）：深内陆水体 - 110（6）：中等或大陆海洋 - 111（7）：深海 - 比特 14：可能雪/冰 - 0：否 - 1：是 - 比特 15：可能阴影 - 0：否 - 1：是

请访问 [LP DAAC「引用我们的数据」页面](https://lpdaac.usgs.gov/citing_our_data) 了解引用 LP DAAC 数据集的信息。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2017 年；分辨率：250 米。
- 时间范围：2002-07-04 至 2017-03-14

## 分辨率与规格

- 空间分辨率：约 250 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 归一化差值植被指数。 | 250 |  |
| EVI | 增强植被指数。 | 250 |  |
| DetailedQA | VI 质量指示。 | 250 |  |
| sur_refl_b01 | 红光地表反射率。 | 250 | 645nm |
| sur_refl_b02 | 近红外地表反射率。 | 250 | 858nm |
| sur_refl_b03 | 蓝光地表反射率。 | 250 | 469nm |
| sur_refl_b07 | 中红外地表反射率。 | 250 | 2130nm/2105 - 2155nm |
| ViewZenith | 观测天顶角。 | 250 |  |
| SolarZenith | 太阳天顶角。 | 250 |  |
| RelativeAzimuth | 相对方位角。 | 250 |  |
| DayOfYear | 年儒略日。 | 250 |  |
| SummaryQA | VI 像元的质量可靠性。 | 250 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MYD13Q1');
```

- 数据集编号（Earth Engine ID）：`MODIS/MYD13Q1`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD13Q1

## 许可与引用

- 许可：proprietary
- 关键词：16-day, aqua, evi, global, modis, myd13q1, ndvi, vegetation, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)
- [GCOM-C/SGLI 三级叶面积指数产品（V1）](/pages/099c4e7b/)
- [GCOM-C/SGLI 三级叶面积指数产品（V2）](/pages/9acc1a9f/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
