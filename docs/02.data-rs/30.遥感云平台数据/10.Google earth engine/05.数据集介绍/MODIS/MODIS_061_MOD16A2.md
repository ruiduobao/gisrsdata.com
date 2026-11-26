---
title: "MOD16A2.061 Terra 净蒸散 8 天全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/040259df/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "evapotranspiration"
  - "global"
  - "mod16a2"
  - "modis"
  - "nasa"
  - "water-vapor"
---

# MOD16A2.061 Terra 净蒸散 8 天全球 500 米

英文原名：MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m

## 这是什么数据

MOD16A2 版本 6.1 蒸散/潜热通量产品是一个像元分辨率 500 米的 8 天合成产品。MOD16 数据产品集合使用的算法基于 Penman-Monteith 方程的逻辑，包括每日气象再分析数据输入以及 MODIS 遥感数据产品，如植被属性动力学、反照率与土地覆盖。

两个蒸散层（ET 与 PET）的像元值是合成时段内全部八天的总和。两个潜热层（LE 与 PLE）的像元值是合成时段内全部八天的平均值。注意，每年最后一个 8 天时段是 5 或 6 天的合成时段，取决于年份。

填充值 32761 至 32767 的类别分配可能不准确。它们不包括在 EE 资产中。

版本 6.1 一级 B（L1B）产品已经历各种定标变更的改进，包括：影响 Aqua 与 Terra MODIS 反射波段的响应-扫描角（RVS）方法变更、Terra MODIS 红外（IR）波段光学串扰的校正，以及 2012–2017 年期间 Terra MODIS 前向查找表（LUT）更新的校正。已对 L1B 反射太阳波段（RSB）应用偏振校正。本产品使用气候学 LAI/FPAR 作为业务 LAI/FPAR 的备份。

根据 [MODIS 科学团队](https://forum.earthdata.nasa.gov/viewtopic.php?p=15070#p15070)，MOD16A2 6.1 产品在 2021 年之前将没有数据。MODIS 科学团队建议对 2000 至 2021 年的数据使用填补的 MOD16A2GF 6.1 产品——2022 年数据可用时亦然。他们如此建议是因为填补产品预期质量更优，尤其是在业务产品性能原本会受多云或低质量输入观测负面影响的区域。对当前年份，填补产品要到次年初才会有（即 2023 年数据应在 2024 年初可用）。因此，如果用户需要 2023 年（或未来的「当前」年）的 MOD16A2GF 6.1 数据，他们建议使用 MOD16A2 6.1 产品，该产品使用每日观测生成，多云或低质量观测以气候学观测替代。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2021 年至 2026 年；分辨率：500 米。
- 时间范围：2021-01-01 至 2026-10-16

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ET | 总蒸散。 | 500 |  |
| LE | 平均潜热通量。 | 500 |  |
| PET | 总潜在蒸散。 | 500 |  |
| PLE | 平均潜在潜热通量。 | 500 |  |
| ET_QC | 蒸散质量控制标志。 | 500 |  |

## 能拿来做什么

- 蒸散与水资源评估
- 干旱监测
- 灌溉管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MOD16A2');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD16A2`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD16A2
* [User's Guide](https://lpdaac.usgs.gov/documents/494/MOD16_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD16A2)

## 许可与引用

- 许可：proprietary
- 关键词：8-day, evapotranspiration, global, mod16a2, modis, nasa, water-vapor
- 数据引用：Please visit
[LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD16A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD15A3H.061 MODIS 叶面积指数/FPAR 4 天全球 500 米](/pages/4b457845/)
- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
