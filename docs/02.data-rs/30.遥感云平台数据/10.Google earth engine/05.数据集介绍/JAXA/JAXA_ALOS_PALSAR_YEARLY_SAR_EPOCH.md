---
title: "全球 PALSAR-2/PALSAR 年度镶嵌图（第 2.5.0 版）"
date: 2026-11-03 12:00:00
permalink: /pages/13015f55/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "alos2"
  - "eroc"
  - "jaxa"
  - "palsar"
  - "palsar2"
  - "sar"
  - "satellite-imagery"
---

# 全球 PALSAR-2/PALSAR 年度镶嵌图（第 2.5.0 版）

英文原名：Global PALSAR-2/PALSAR Yearly Mosaic, version 2.5.0

## 这是什么数据

全球 25 米 PALSAR/PALSAR-2 镶嵌图是由 PALSAR/PALSAR-2 的 SAR 影像条带镶嵌而成的无缝全球 SAR 影像。对每一年与每个地点，条带数据的选取通过目视检查该时段内的浏览镶嵌图完成，优先使用对地表湿度响应最小的数据。每个年度镶嵌图只使用目标年份的数据，因此当年度全球覆盖有空缺时，不使用往年数据填补。

由于 ALOS 与 ALOS-2 时间覆盖之间的空缺，2011–2014 年没有数据。

SAR 影像使用数字地表模型 ALOS World 3D - 30m（AW3D30）进行了正射校正与坡度校正。

还应用了去条带处理（Shimada & Isoguchi, 2002, 2010），以均衡相邻条带之间的强度差异——这种差异主要由地表湿度条件的季节与日变化造成。

极化数据以 16 位数字量（DN）存储。DN 值可使用以下公式转换为以分贝（dB）为单位的 γ₀ 值：

* γ₀ = 10·log₁₀(DN²) − 83.0 dB

注意：

* 高纬度森林区域的后向散射值在不同路径之间可能差异显著，这是冬季树木冻结导致后向散射强度变化所致。

更多信息见提供方的[数据集说明](https://www.eorc.jaxa.jp/ALOS/en/dataset/pdf/DatasetDescription_PALSAR2_Mosaic_ver250.pdf)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2015 年至 2024 年；分辨率：25 米。
- 时间范围：2015-01-01 至 2024-01-01

## 分辨率与规格

- 空间分辨率：约 25 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| HH | HH 极化后向散射系数，16 位 DN。 | 25 |  |
| HV | HV 极化后向散射系数，16 位 DN。 | 25 |  |
| angle | 局部入射角。 | 25 |  |
| epoch | 观测日期时间戳（自 1970 年 1 月 1 日起的毫秒数）；该波段由原始数据的 date 波段实时计算得到，date 表示 2014 年 5 月 24 日与观测日期之间的天数差。 | 25 |  |
| qa | 处理信息。 | 25 |  |

## 能拿来做什么

- 地表形变与灾害应急监测
- 洪水与地表覆盖制图
- 雷达遥感教学与研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/SAR_EPOCH');
```

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/PALSAR/YEARLY/SAR_EPOCH`
- 提供方：JAXA EORC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR_YEARLY_SAR_EPOCH

## 许可与引用

- 许可：proprietary
- 关键词：alos, alos2, eroc, jaxa, palsar, palsar2, sar, satellite-imagery
- 数据引用：Masanobu Shimada, Takuya Itoh, Takeshi Motooka, Manabu Watanabe,
Shiraishi Tomohiro, Rajesh Thapa, and Richard Lucas, "New Global
Forest/Non-forest Maps from ALOS PALSAR Data (2007-2010)", Remote Sensing
of Environment, 155, pp. 13-31, December 2014.
[doi:10.1016/j.rse.2014.04.014.](https://doi.org/10.1016/j.rse.2014.04.014)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS-2 PALSAR-2 StripMap Level 2.1](/pages/b836b19e/)
- [ALOS/AVNIR-2 ORI](/pages/d4abf354/)
- [Global PALSAR-2/PALSAR Yearly Mosaic, version 1](/pages/03cf5a7a/)
- [PALSAR-2 ScanSAR Level 2.2](/pages/636ee51c/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
