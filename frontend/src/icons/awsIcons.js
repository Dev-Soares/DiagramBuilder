import {
  // Compute
  ArchitectureServiceAmazonEC2,
  ArchitectureServiceAWSLambda,
  ArchitectureServiceAmazonElasticContainerService, // ECS
  ArchitectureServiceAmazonElasticKubernetesService, // EKS
  ArchitectureServiceAmazonLightsail,

  // Storage
  ArchitectureServiceAmazonSimpleStorageService, // S3
  ArchitectureServiceAmazonElasticBlockStore, // EBS
  ArchitectureServiceAmazonEFS,
  ArchitectureServiceAmazonSimpleStorageServiceGlacier, // Glacier
  ArchitectureServiceAWSStorageGateway,

  // Database
  ArchitectureServiceAmazonRDS,
  ArchitectureServiceAmazonDynamoDB,
  ArchitectureServiceAmazonRedshift,
  ArchitectureServiceAmazonElastiCache,
  ArchitectureServiceAmazonNeptune,

  // Networking & Content Delivery
  ArchitectureServiceAmazonVirtualPrivateCloud, // VPC
  ArchitectureServiceAmazonRoute53,
  ArchitectureServiceAmazonCloudFront,
  ArchitectureServiceAmazonAPIGateway,
  ArchitectureServiceAWSDirectConnect,
  ArchitectureServiceElasticLoadBalancing,
  ArchitectureServiceAWSSitetoSiteVPN, // VPN

  // Security, Identity & Compliance
  ArchitectureServiceAWSIdentityandAccessManagement, // IAM
  ArchitectureServiceAWSKeyManagementService, // KMS
  ArchitectureServiceAWSCloudTrail,
  ArchitectureServiceAWSWAF,
  ArchitectureServiceAWSCertificateManager,
  ArchitectureServiceAmazonCognito,
  ArchitectureServiceAWSSecretsManager,

  // Developer Tools
  ArchitectureServiceAWSCodeCommit,
  ArchitectureServiceAWSCodeBuild,
  ArchitectureServiceAWSCodeDeploy,
  ArchitectureServiceAWSCodePipeline,
  ArchitectureServiceAWSCloudFormation,

  // Management & Governance
  ArchitectureServiceAmazonCloudWatch,
  ArchitectureServiceAWSConfig,
  ArchitectureServiceAWSSystemsManager,
  ArchitectureServiceAWSOrganizations,
  ArchitectureServiceAWSTrustedAdvisor,

  // Application Integration
  ArchitectureServiceAmazonSimpleQueueService, // SQS
  ArchitectureServiceAmazonSimpleNotificationService, // SNS
  ArchitectureServiceAWSStepFunctions,
  ArchitectureServiceAmazonAppFlow,

} from 'aws-react-icons';

const awsIcons = [
  {
    category: "Compute",
    icons: [
      { component: ArchitectureServiceAmazonEC2, id: "amazon-ec2", label: "Amazon EC2", type: "CustomNode", color: "#FF7300" },
      { component: ArchitectureServiceAWSLambda, id: "aws-lambda", label: "AWS Lambda", type: "CustomNode", color: "#FF7300" },
      { component: ArchitectureServiceAmazonElasticContainerService, id: "amazon-ecs", label: "Amazon ECS", type: "CustomNode", color: "#FF7300" },
      { component: ArchitectureServiceAmazonElasticKubernetesService, id: "amazon-eks", label: "Amazon EKS", type: "CustomNode", color: "#FF7300" },
      { component: ArchitectureServiceAmazonLightsail, id: "amazon-lightsail", label: "Amazon Lightsail", type: "CustomNode", color: "#FF7300" },
    ],
  },
  {
    category: "Storage",
    icons: [
      { component: ArchitectureServiceAmazonSimpleStorageService, id: "amazon-s3", label: "Amazon S3", type: "CustomNode", color: "#79a013" },
      { component: ArchitectureServiceAmazonElasticBlockStore, id: "amazon-ebs", label: "Amazon EBS", type: "CustomNode", color: "#79a013" },
      { component: ArchitectureServiceAmazonEFS, id: "amazon-efs", label: "Amazon EFS", type: "CustomNode", color: "#79a013" },
      { component: ArchitectureServiceAmazonSimpleStorageServiceGlacier, id: "amazon-glacier", label: "Amazon Glacier", type: "CustomNode", color: "#79a013" },
      { component: ArchitectureServiceAWSStorageGateway, id: "aws-storage-gateway", label: "AWS Storage Gateway", type: "CustomNode", color: "#79a013" },
    ],
  },
  {
    category: "Database",
    icons: [
      { component: ArchitectureServiceAmazonRDS, id: "amazon-rds", label: "Amazon RDS", type: "CustomNode", color: "#c925d1" },
      { component: ArchitectureServiceAmazonDynamoDB, id: "amazon-dynamodb", label: "Amazon DynamoDB", type: "CustomNode", color: "#c925d1" },
      { component: ArchitectureServiceAmazonRedshift, id: "amazon-redshift", label: "Amazon Redshift", type: "CustomNode", color: "#8957e5" },
      { component: ArchitectureServiceAmazonElastiCache, id: "amazon-elasticache", label: "Amazon ElastiCache", type: "CustomNode", color: "#c925d1" },
      { component: ArchitectureServiceAmazonNeptune, id: "amazon-neptune", label: "Amazon Neptune", type: "CustomNode", color: "#c925d1" },
    ],
  },
  {
    category: "Networking",
    icons: [
      { component: ArchitectureServiceAmazonVirtualPrivateCloud, id: "amazon-vpc", label: "Amazon VPC", type: "CustomNode", color: "#8957e5" },
      { component: ArchitectureServiceAmazonRoute53, id: "amazon-route53", label: "Amazon Route 53", type: "CustomNode", color: "#8957e5" },
      { component: ArchitectureServiceAmazonCloudFront, id: "amazon-cloudfront", label: "Amazon CloudFront", type: "CustomNode", color: "#8957e5" },
      { component: ArchitectureServiceAmazonAPIGateway, id: "aws-api-gateway", label: "AWS API Gateway", type: "CustomNode", color: "#8957e5" },
      { component: ArchitectureServiceAWSDirectConnect, id: "aws-direct-connect", label: "AWS Direct Connect", type: "CustomNode", color: "#8957e5" },
      { component: ArchitectureServiceElasticLoadBalancing, id: "aws-elb", label: "Elastic Load Balancing", type: "CustomNode", color: "#8957e5" },
      { component: ArchitectureServiceAWSSitetoSiteVPN, id: "aws-vpn", label: "AWS VPN", type: "CustomNode", color: "#8957e5" },
    ],
  },
  {
    category: "Security",
    icons: [
      { component: ArchitectureServiceAWSIdentityandAccessManagement, id: "aws-iam", label: "AWS IAM", type: "CustomNode", color: "#dc3243" },
      { component: ArchitectureServiceAWSKeyManagementService, id: "aws-kms", label: "AWS KMS", type: "CustomNode", color: "#dc3243" },
      { component: ArchitectureServiceAWSCloudTrail, id: "aws-cloudtrail", label: "AWS CloudTrail", type: "CustomNode", color: "#e71d75" },
      { component: ArchitectureServiceAWSWAF, id: "aws-waf", label: "AWS WAF", type: "CustomNode", color: "#dc3243" },
      { component: ArchitectureServiceAWSCertificateManager, id: "aws-certificate-manager", label: "AWS Certificate Manager", type: "CustomNode", color: "#dc3243" },
      { component: ArchitectureServiceAmazonCognito, id: "amazon-cognito", label: "Amazon Cognito", type: "CustomNode", color: "#dc3243" },
      { component: ArchitectureServiceAWSSecretsManager, id: "aws-secrets-manager", label: "AWS Secrets Manager", type: "CustomNode", color: "#dc3243" },
    ],
  },
  {
    category: "Tools",
    icons: [
      { component: ArchitectureServiceAWSCodeCommit, id: "aws-codecommit", label: "AWS CodeCommit", type: "CustomNode", color: "#c925d1" },
      { component: ArchitectureServiceAWSCodeBuild, id: "aws-codebuild", label: "AWS CodeBuild", type: "CustomNode", color: "#c925d1" },
      { component: ArchitectureServiceAWSCodeDeploy, id: "aws-codedeploy", label: "AWS CodeDeploy", type: "CustomNode", color: "#c925d1" },
      { component: ArchitectureServiceAWSCodePipeline, id: "aws-codepipeline", label: "AWS CodePipeline", type: "CustomNode", color: "#c925d1" },
      { component: ArchitectureServiceAWSCloudFormation, id: "aws-cloudformation", label: "AWS CloudFormation", type: "CustomNode", color: "#e71d75" },
    ],
  },
  {
    category: "Management",
    icons: [
      { component: ArchitectureServiceAmazonCloudWatch, id: "amazon-cloudwatch", label: "Amazon CloudWatch", type: "CustomNode", color: "#e71d75" },
      { component: ArchitectureServiceAWSConfig, id: "aws-config", label: "AWS Config", type: "CustomNode", color: "#e71d75" },
      { component: ArchitectureServiceAWSSystemsManager, id: "aws-systems-manager", label: "AWS Systems Manager", type: "CustomNode", color: "#e71d75" },
      { component: ArchitectureServiceAWSOrganizations, id: "aws-organizations", label: "AWS Organizations", type: "CustomNode", color: "#e71d75" },
      { component: ArchitectureServiceAWSTrustedAdvisor, id: "aws-trusted-advisor", label: "AWS Trusted Advisor", type: "CustomNode", color: "#e71d75" },
    ],
  },
  {
    category: "Integration",
    icons: [
      { component: ArchitectureServiceAmazonSimpleQueueService, id: "amazon-sqs", label: "Amazon SQS", type: "CustomNode", color: "#e71d75" },
      { component: ArchitectureServiceAmazonSimpleNotificationService, id: "amazon-sns", label: "Amazon SNS", type: "CustomNode", color: "#e71d75" },
      { component: ArchitectureServiceAWSStepFunctions, id: "aws-step-functions", label: "AWS Step Functions", type: "CustomNode", color: "#e71d75" },
      { component: ArchitectureServiceAmazonAppFlow, id: "amazon-appflow", label: "Amazon AppFlow", type: "CustomNode", color: "#e71d75" },
    ],
  },
];

export default awsIcons;