---
title: "卫星嵌入 V1"
date: 2026-11-03 12:00:00
permalink: /pages/f912c733/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "global"
  - "google"
  - "landsat-derived"
  - "satellite-imagery"
  - "sentinel1-derived"
  - "sentinel2-derived"
---

# 卫星嵌入 V1

英文原名：Satellite Embedding V1

## 这是什么数据

Google 卫星嵌入数据集是一个全球性的、可直接分析的学习型地理空间[嵌入](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space)集合。该数据集中的每个 10 米像元都是一个 64 维表示，即「[嵌入向量](https://developers.google.com/machine-learning/glossary#embedding-vector)」，它编码了单个日历年内、由各种地球观测仪器和数据集测得的该像元及其周围地表状况的时间轨迹。与波段对应物理测量的传统光谱输入和指数不同，嵌入是特征向量，它以一种不那么直接可解释、但更强大的方式概括多源、多模态观测之间的关系。[见使用示例和更详细的解释](https://medium.com/google-earth/ai-powered-pixels-introducing-googles-satellite-embedding-dataset-31744c1f4650)。

该数据集覆盖陆地地表和浅水区，包括潮间带和礁区、内陆水道和沿海水道。两极的覆盖受卫星轨道和仪器覆盖的限制。

该集合由覆盖约 163,840 米 × 163,840 米的影像组成，每景影像有 64 个波段 `{A00, A01, …, A63}`，每个波段对应 64 维嵌入空间的一个轴。所有波段应一起用于下游分析，因为它们共同指代嵌入空间中的一个 64 维坐标，不能独立解释。

所有影像均按 UTM_ZONE 属性所指示的当地通用横轴墨卡托（UTM）投影生成，并具有 `system:time_start` 和 `system:time_end` 属性，反映嵌入所概括的日历年；例如，2021 年的嵌入影像的 `system:start_time` 等于 `ee.Date('2021-01-01 00:00:00')`，`system:end_time` 等于 `ee.Date('2022-01-01 00:00:00')`。

这些嵌入是单位长度的，即其模为 1，不需要任何额外归一化，并分布在[单位球面](https://en.wikipedia.org/wiki/Unit_sphere)上，非常适合与聚类算法和基于树的分类器一起使用。嵌入空间在不同年份之间也是一致的，不同年份的嵌入可通过考虑两个嵌入向量之间的点积或夹角来用于状况变化检测。此外，嵌入被设计为线性可组合的，即它们可以聚合以产生更粗空间分辨率的嵌入，或通过向量运算变换，并且仍保留其语义含义和距离关系。

卫星嵌入数据集由 [AlphaEarth Foundations](https://deepmind.google/discover/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/) 制作，这是一个地理空间嵌入模型，它同化了包括光学、雷达、激光雷达（LiDAR）和其他来源在内的多个数据流（Brown、Kazmierski、Pasquarella 等，2025；预印本见[此处](https://arxiv.org/abs/2507.22291)）。

由于表示是在许多传感器和影像上学习得到的，嵌入表示通常能克服云、扫描线、传感器伪影或数据缺失等常见问题，提供无缝的、可直接分析的特征，可在分类、回归和变化检测分析中直接替代其他地球观测影像源。

该影像集合中的嵌入使用 AlphaEarth Foundations 模型的 v2.1 版生成，与 AlphaEarth Foundations 论文中评估的 v2.0 版模型相比有多项改进。即：重新生成了训练数据集，纳入了大量此前因传感器覆盖有限而被丢弃的南极洲样本，训练视频序列的数量从超过 840 万有效增加到超过 1010 万；训练期间还纳入了 USDA NASS 耕地数据层（Cropland Data Layer）作为额外目标；NLCD 和 CDL 的损失权重从 0.50 降至 0.25；并实施了其他几项小改动，以更好地减轻与输入传感器条带、瓦片和多分辨率像元目标相关的视觉伪影。这些变化对模型在评估指标方面的性能没有显著影响，但总体上提高了所得嵌入的质量。

虽然仍存在一些大尺度的条带和数据可用性伪影，但它们通常表现为较小的向量偏移，一般不会显著影响下游处理或结果。

该数据集也可通过 Google Cloud Storage（GCS）获取，存储桶为 `gs://alphaearth_foundations`。你可以通过 [Google Cloud Console](https://console.cloud.google.com/storage/browser/alphaearth_foundations) 浏览存储桶内容，并参阅存储桶 [README](https://developers.google.com/earth-engine/guides/aef_on_gcs_readme) 了解数据结构的全部细节。截至 2026 年 7 月，该存储桶设置为「提供方付费」。

更新：

* 截至 2025-11-17，嵌入层已为 DATASET_VERSION 1.1。其中包括重新生成的 2017 年层，纳入了额外的 Sentinel-1 采集。

Google 致力于持续生产年度卫星嵌入层，并将至少提前一年通知任何预期的交付变更，前提是制作该数据集所依赖的 USGS 和 ESA 输入数据流持续可用。

## 覆盖范围与时间

- 覆盖范围：全球陆地与浅水区
- 时间范围：2017-01-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| A00 | 嵌入向量的第 0 个轴。 | 10 |  |
| A01 | 嵌入向量的第 1 个轴。 | 10 |  |
| A02 | 嵌入向量的第 2 个轴。 | 10 |  |
| A03 | 嵌入向量的第 3 个轴。 | 10 |  |
| A04 | 嵌入向量的第 4 个轴。 | 10 |  |
| A05 | 嵌入向量的第 5 个轴。 | 10 |  |
| A06 | 嵌入向量的第 6 个轴。 | 10 |  |
| A07 | 嵌入向量的第 7 个轴。 | 10 |  |
| A08 | 嵌入向量的第 8 个轴。 | 10 |  |
| A09 | 嵌入向量的第 9 个轴。 | 10 |  |
| A10 | 嵌入向量的第 10 个轴。 | 10 |  |
| A11 | 嵌入向量的第 11 个轴。 | 10 |  |
| A12 | 嵌入向量的第 12 个轴。 | 10 |  |
| A13 | 嵌入向量的第 13 个轴。 | 10 |  |
| A14 | 嵌入向量的第 14 个轴。 | 10 |  |
| A15 | 嵌入向量的第 15 个轴。 | 10 |  |
| A16 | 嵌入向量的第 16 个轴。 | 10 |  |
| A17 | 嵌入向量的第 17 个轴。 | 10 |  |
| A18 | 嵌入向量的第 18 个轴。 | 10 |  |
| A19 | 嵌入向量的第 19 个轴。 | 10 |  |
| A20 | 嵌入向量的第 20 个轴。 | 10 |  |
| A21 | 嵌入向量的第 21 个轴。 | 10 |  |
| A22 | 嵌入向量的第 22 个轴。 | 10 |  |
| A23 | 嵌入向量的第 23 个轴。 | 10 |  |
| A24 | 嵌入向量的第 24 个轴。 | 10 |  |
| A25 | 嵌入向量的第 25 个轴。 | 10 |  |
| A26 | 嵌入向量的第 26 个轴。 | 10 |  |
| A27 | 嵌入向量的第 27 个轴。 | 10 |  |
| A28 | 嵌入向量的第 28 个轴。 | 10 |  |
| A29 | 嵌入向量的第 29 个轴。 | 10 |  |
| A30 | 嵌入向量的第 30 个轴。 | 10 |  |
| A31 | 嵌入向量的第 31 个轴。 | 10 |  |
| A32 | 嵌入向量的第 32 个轴。 | 10 |  |
| A33 | 嵌入向量的第 33 个轴。 | 10 |  |
| A34 | 嵌入向量的第 34 个轴。 | 10 |  |
| A35 | 嵌入向量的第 35 个轴。 | 10 |  |
| A36 | 嵌入向量的第 36 个轴。 | 10 |  |
| A37 | 嵌入向量的第 37 个轴。 | 10 |  |
| A38 | 嵌入向量的第 38 个轴。 | 10 |  |
| A39 | 嵌入向量的第 39 个轴。 | 10 |  |
| A40 | 嵌入向量的第 40 个轴。 | 10 |  |
| A41 | 嵌入向量的第 41 个轴。 | 10 |  |
| A42 | 嵌入向量的第 42 个轴。 | 10 |  |
| A43 | 嵌入向量的第 43 个轴。 | 10 |  |
| A44 | 嵌入向量的第 44 个轴。 | 10 |  |
| A45 | 嵌入向量的第 45 个轴。 | 10 |  |
| A46 | 嵌入向量的第 46 个轴。 | 10 |  |
| A47 | 嵌入向量的第 47 个轴。 | 10 |  |
| A48 | 嵌入向量的第 48 个轴。 | 10 |  |
| A49 | 嵌入向量的第 49 个轴。 | 10 |  |
| A50 | 嵌入向量的第 50 个轴。 | 10 |  |
| A51 | 嵌入向量的第 51 个轴。 | 10 |  |
| A52 | 嵌入向量的第 52 个轴。 | 10 |  |
| A53 | 嵌入向量的第 53 个轴。 | 10 |  |
| A54 | 嵌入向量的第 54 个轴。 | 10 |  |
| A55 | 嵌入向量的第 55 个轴。 | 10 |  |
| A56 | 嵌入向量的第 56 个轴。 | 10 |  |
| A57 | 嵌入向量的第 57 个轴。 | 10 |  |
| A58 | 嵌入向量的第 58 个轴。 | 10 |  |
| A59 | 嵌入向量的第 59 个轴。 | 10 |  |
| A60 | 嵌入向量的第 60 个轴。 | 10 |  |
| A61 | 嵌入向量的第 61 个轴。 | 10 |  |
| A62 | 嵌入向量的第 62 个轴。 | 10 |  |
| A63 | 嵌入向量的第 63 个轴。 | 10 |  |

## 能拿来做什么

- 少样本土地覆盖分类
- 跨年变化检测
- 回归建模与相似性检索

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL');
```

- 数据集编号（Earth Engine ID）：`GOOGLE/SATELLITE_EMBEDDING/V1/ANNUAL`
- 提供方：Google Earth Engine、Google DeepMind、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_SATELLITE_EMBEDDING_V1_ANNUAL

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：annual, global, google, landsat-derived, satellite-imagery, sentinel1-derived, sentinel2-derived
- 数据引用：Brown, C. F., Kazmierski, M. R., Pasquarella, V J., Rucklidge, W. J.,
Samsikova, M., Zhang, C., Shelhamer, E., Lahera, E.,  Wiles, O.,
Ilyushchenko, S., Gorelick, N., Zhang, L. L., Alj, S.,  Schechter, E.,
Askay, S., Guinan, O., Moore, R., Boukouvalas, A., & Kohli, P.(2025).
AlphaEarth Foundations: An embedding field model for accurate and
efficient global mapping from sparse label data. arXiv preprint
arXiv.2507.22291. [doi:10.48550/arXiv.2507.22291](https://doi.org/10.48550/arXiv.2507.22291)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [EO-1 Hyperion 高光谱成像仪](/pages/9f815cd7/)
- [Landsat 8 二级地表反射率与地表温度数据](/pages/778e3960/)
- [全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：入射角与叠掩阴影](/pages/008235d0/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
