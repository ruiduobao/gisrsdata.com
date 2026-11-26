---
title: "Cloud Score+ S2_HARMONIZED V1"
date: 2026-11-03 12:00:00
permalink: /pages/4a61128e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cloud"
  - "google"
  - "satellite-imagery"
  - "sentinel2-derived"
---

# Cloud Score+ S2_HARMONIZED V1

英文原名：Cloud Score+ S2_HARMONIZED V1

## 这是什么数据

Cloud Score+ 是用于中高分辨率光学卫星影像的质量评估（QA）处理器。Cloud Score+ S2_HARMONIZED 数据集由[协调化 Sentinel-2 L1C 集合](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED)业务化生产，Cloud Score+ 的输出可用于识别相对晴空的像元，并有效地从 [L1C（大气层顶）](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED) 或 [L2A（地表反射率）](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED) 影像中去除云和云影。

Cloud Score+ S2_HARMONIZED 数据集包含两个 QA 波段 `cs` 和 `cs_cdf`，两者都以 0 到 1 之间的连续尺度按地表可见性对单个像元的可用性评分，其中 0 表示「不晴空」（被遮挡），1 表示「晴空」（无遮挡）观测。`cs` 波段基于观测像元与（理论）晴空参考观测之间的光谱距离评分，而 `cs_cdf` 波段表示基于给定位置随时间评分的估计累积分布、观测像元为晴空的似然。换言之，`cs` 可视为更即时的大气相似性评分（即该像元与完美晴空参考下预期所见的相似程度），而 `cs_cdf` 捕捉的是估计评分随时间的期望（即如果我们有该像元随时间的全部评分，这个评分会排在什么位置）。

Cloud Score+ S2_HARMONIZED 集合中的影像与生成它们的单个 [Sentinel-2 L1C](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED) 资产具有相同的 id 和 `system:index` 属性，因此 Cloud Score+ 波段可基于共享的 `system:index` 与源影像关联。

整个 Sentinel-2 存档的 Cloud Score+ 回填目前正在进行中，数据集可用性日期将随着新结果加入 Cloud Score+ 集合而定期更新。

有关 Cloud Score+ 数据集和建模方法的更多信息，见[这篇 Medium 文章](https://medium.com/google-earth/all-clear-with-cloud-score-bd6ee2e2235e)。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2015-06-27 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| cs | 基于与（理论）晴空参考的光谱距离的像元质量评分 | 10 |  |
| cs_cdf | 估计 `cs` 值对应的可能 `cs` 值累积分布函数的值 | 10 |  |

## 能拿来做什么

- Sentinel-2 云与云影掩膜
- 晴空像元筛选与合成
- 影像质量评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED');
```

- 数据集编号（Earth Engine ID）：`GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED`
- 提供方：Google Earth Engine、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：cloud, google, satellite-imagery, sentinel2-derived
- 数据引用：Pasquarella, V. J., Brown, C. F., Czerwinski, W., & Rucklidge, W. J. (2023)
Comprehensive Quality Assessment of Optical Satellite Imagery Using Weakly
Supervised Video Learning. In Proceedings of the IEEE/CVF Conference on
Computer Vision and Pattern Recognition (pp. 2125-2135).
[doi:10.1109/CVPRW59228.2023.00206](https://doi.org/10.1109/CVPRW59228.2023.00206)
[PDF](https://openaccess.thecvf.com/content/CVPR2023W/EarthVision/html/Pasquarella_Comprehensive_Quality_Assessment_of_Optical_Satellite_Imagery_Using_Weakly_Supervised_CVPRW_2023_paper.html)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [EO-1 Hyperion 高光谱成像仪](/pages/9f815cd7/)
- [Landsat 8 二级地表反射率与地表温度数据](/pages/778e3960/)
- [全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：入射角与叠掩阴影](/pages/008235d0/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
